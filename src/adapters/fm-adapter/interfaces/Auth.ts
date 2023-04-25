import type { FmBaseResponse } from './generics';


// export type FmAuthResponse = FmGetRecordsResponse<UserAuthData>;

export type FmSessionResponse = FmBaseResponse<{ token: string }>;


/* --------
 * Base Response
 * -------- */
export interface UserAuthData {
  IdUtente: string;

  PasswordUtente: string;

  TxtUtente: string;
}
