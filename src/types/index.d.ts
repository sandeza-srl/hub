import type { IUserData } from '../api/auth/interfaces/UserData';


declare global {
  namespace Express {
    export interface Request {
      user?: IUserData;
    }
  }
}
