import { IsDefined, IsEmail, IsString } from 'class-validator';

import { MONGO_DB_SELECTOR } from '../../../database/constants';


export class UserLoginDto {

  // TODO: Add missing IsUUID validator before Production Deploy
  @IsDefined()
  @IsString()
  [MONGO_DB_SELECTOR]!: string;


  @IsDefined()
  @IsEmail()
  email!: string;


  @IsDefined()
  @IsString()
  password!: string;

}
