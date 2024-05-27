import { HttpException } from '@nestjs/common';
import axios, { AxiosRequestConfig } from 'axios';
import { encodeToBase64, getRequiredEnv, getOptionalEnv } from '../../../utils';
import { FmSessionResponse } from '../interfaces/Auth';
import { FmCreateRecordResponse } from '../interfaces/generics';


export default class FmClient {

  /**
   * Default Data
   */
  private static readonly FM_ADMIN_USER: string = getRequiredEnv('FM_ADMIN_USER');

  private static readonly FM_ADMIN_PASSWORD: string = getRequiredEnv('FM_ADMIN_PASSWORD');

  private static readonly FM_STANDARD_DATABASE: string = getRequiredEnv('FM_STANDARD_DATABASE');

  private static readonly FM_STANDARD_LAYOUT: string = getRequiredEnv('FM_STANDARD_LAYOUT');

  private static readonly FM_TOKEN_EXP_TIME_MIN: string = getRequiredEnv('FM_TOKEN_EXP_TIME_MIN');

  private static readonly API_VERSION: string = getOptionalEnv('API_VERSION', '1');

  /**
   * Client Instance Pool
   */
  private static clients: Map<string, FmClient> = new Map<string, FmClient>();


  public static forHost(host: string): FmClient {
    /** Verify an instance of FmClient has already been created */
    if (FmClient.clients.has(host)) {
      return FmClient.clients.get(host) as FmClient;
    }

    /** If not, create a new instance related to requested host */
    const newClient: FmClient = new FmClient(
      host,
      this.FM_STANDARD_DATABASE,
      this.FM_STANDARD_LAYOUT,
      this.FM_ADMIN_USER,
      this.FM_ADMIN_PASSWORD
    );

    /** Add the client to the pool */
    FmClient.clients.set(host, newClient);

    return newClient;
  }


  /**
   * Client Properties
   */
  private readonly _host: string;

  private readonly _username: string;

  private readonly _password: string;

  private _database: string;

  private _layout: string | undefined;

  private _script: string | undefined;

  private _limit: number | undefined;

  private _version: string = FmClient.API_VERSION;


  /**
   * Token Utilities
   */
  private authToken: string | undefined;

  private authTimeout: NodeJS.Timeout = setTimeout(() => {
    this.tokenExpired = true;
  }, +FmClient.FM_TOKEN_EXP_TIME_MIN * 60 * 1000);

  private tokenExpired: boolean = true;


  /**
   * Constructor
   */
  private constructor(host: string, database: string, layout: string, username: string, password: string) {
    this._host = host;
    this._database = database;
    this._username = username;
    this._password = password;
  }


  /* --------
   * Public Getters
   * -------- */
  public get databaseUrl(): string {
    return `https://${this._host}/fmi/data/v${this._version}/databases/${this._database}`;
  }


  public get layoutUrl(): string {
    /** Check if layout has been defined */
    if (!this._layout) {
      throw new Error('Layout for FmClient is undefined');
    }

    return `${this.databaseUrl}/layouts/${this._layout}`;
  }


  public get scriptUrl(): string {
    /** Check if layout has been defined */
    if (!this._layout) {
      throw new Error('Layout for FmClient is undefined');
    }

    return `${this.layoutUrl}/script/${this._script}`;
  }


  /* --------
   * Public Modifiers
   * -------- */
  public layout(name: string): FmClient {
    this._layout = name;
    return this;
  }


  public script(name: string): FmClient {
    this._script = name;
    return this;
  }


  public database(name: string): FmClient {
    this._database = name;
    return this;
  }


  /* --------
   * Auth Token Methods
   * -------- */
  private async getAuthToken(): Promise<string> {
    /** Get a new auth token only if previous one is expired or undefined */
    if (!this.authToken || this.tokenExpired) {
      try {
        const response = await axios.post<FmSessionResponse>(`${this.databaseUrl}/sessions`, {}, {
          headers: {
            Authorization: `Basic ${encodeToBase64(`${this._username}:${this._password}`)}`
          }
        });

        this.authToken = response.data.response.token;
        this.tokenExpired = false;
      }
      catch (error: any) {
        // TODO: Errors Interceptor
        throw error.response;
      }
    }

    /** Refresh the auth token invalidator */
    this.authTimeout.refresh();

    /** Return the token */
    return this.authToken as string;
  }


  /* --------
   * Requests Methods
   * -------- */
  private async request<Response>(config: AxiosRequestConfig): Promise<Response> {
    try {
      /** Make the axios request using provided config */
      const response = await axios({
        baseURL: this.layoutUrl,
        method : 'POST',
        ...config,
        headers: {
          Authorization: `Bearer ${await this.getAuthToken()}`,
          ContentType  : 'application/json',
          ...config.headers
        }
      });

      // TODO: Add the response if it's a creation without a script execution
      return response.data as Response;
    }
    catch (error: any) {
      throw new HttpException(error.response, error.status, error);
    }
  }


  // TODO: Add a function to execute FileMaker API to call a script, method: GET
  private async scriptRequest<Response>(config: AxiosRequestConfig): Promise<Response> {
    try {
      const response = await axios({
        baseURL: this.layoutUrl,
        method : 'GET',
        timeout: 600000,
        ...config,
        headers: {
          Authorization: `Bearer ${await this.getAuthToken()}`,
          ContentType  : 'application/json',
          ...config.headers
        }
      });

      return response.data as Response;
    }
    catch (error: any) {

      /** If error status code is 401 Unauthorized, clear token and execute try again */
      if (error.response.status === 401) {
        this.tokenExpired = true;
        return this.scriptRequest(config);
      }

      throw new HttpException(error.response.status, error);
    }
  }


  /**
   * Insert Record Request Method
   * @param config
   */
  public insert(config: Omit<AxiosRequestConfig, 'baseURL' | 'url'>): Promise<FmCreateRecordResponse> {
    return this.request<FmCreateRecordResponse>({
      ...config,
      url: '/records'
    });
  }


  /**
   * Execute FileMaker Script Request Method
   * @param script
   * @param scriptParam
   */
  // TODO: Create the interface for the script response to substitute <FmCreateRecordResponse>
  public runScript(script: string, scriptParam: string): Promise<FmCreateRecordResponse> {
    return this.scriptRequest<FmCreateRecordResponse>({
      url: `/script/${script}?script.param=${scriptParam}`
    });
  }


}
