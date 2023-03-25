import type { IUserData } from './UserData';


export interface IAuthData {
  accessToken: string;

  refreshToken: string;

  userData: IUserData;
}
