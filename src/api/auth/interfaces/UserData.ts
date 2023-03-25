import { TIndirizziRubricaDocument } from '../../../database/models';


export type TUserType = 'user' | 'company';

export interface IUserData {
  _id: string;

  email: string;

  idAccountCompagnia: string;

  idInstallazione: string;

  userType: TUserType;
}

export type TUserDataSource =
  | TUserDataCustomSource<'user', TIndirizziRubricaDocument>
  | TUserDataCustomSource<'company', unknown>;

type TUserDataCustomSource<T extends TUserType, D> = { type: T, doc: D };
