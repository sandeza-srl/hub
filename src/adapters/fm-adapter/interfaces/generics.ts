/* --------
 * Utilities Type
 * -------- */
export type FmEmptyResponse = FmBaseResponse<{}>;

export type FmGetRecordsResponse<T> = FmBaseResponse<EntityResponseData<T>>;

export type FmCreateRecordResponse = FmBaseResponse<CreateRecordResponseData>;

export type FmUpdateRecordResponse = FmBaseResponse<UpdateRecordResponseData>;


/* --------
 * Generics Type Definition
 * -------- */
interface CreateRecordResponseData<> {
  recordId: string;

  modId: string;

  scriptError: string,

  scriptResult: string;
}

interface UpdateRecordResponseData {
  modId: string;
}


/* --------
 * Message Types
 * -------- */
type FmApiResponseMessage = SuccessfulMessage | ErrorMessage;

type SuccessfulMessage = { code: '0', message: 'OK' };
type ErrorMessage = { code: '1', message: 'ERROR' };


/* --------
 * API Accessor Information
 * -------- */
export interface FmBaseResponse<ResponseDataType> {
  response: ResponseDataType;

  messages: FmApiResponseMessage[];
}


interface EntityResponseData<EntityData> {
  dataInfo: FmDataInfo;

  data: Entity<EntityData>[];
}


interface Entity<EntityData> {
  fieldData: EntityData;

  recordId: string;

  modId: string;

  portalData: {
    [key: string]: unknown;
  };
}


export type FmDataInfo = {
  database: string;

  layout: string;

  table: string;

  totalRecordCount: number;

  foundCount: number;

  returnedCount: number;
};
