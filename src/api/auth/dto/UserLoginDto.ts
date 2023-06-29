import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsString } from 'class-validator';

import { MONGO_DB_SELECTOR } from '../../../database/constants';


export class UserLoginDto {

  @ApiProperty({
    type       : String,
    description: 'IdInstallazione provided by Sandeza'
  })
  // TODO: Add missing IsUUID validator before Production Deploy
  @IsDefined()
  @IsString()
  [MONGO_DB_SELECTOR]!: string;

  @ApiProperty({
    type       : String,
    description: 'User Email saved in zProduction'
  })
  @IsDefined()
  @IsEmail()
  email!: string;

  @ApiProperty({
    type       : String,
    description: 'User Password saved in zProduction'
  })
  @IsDefined()
  @IsString()
  password!: string;

}
