import { IsDefined, IsString, MaxLength } from 'class-validator';


export class ManageRecordDto {

  @IsDefined()
  @IsString()
  @MaxLength(1)
  Operazione!: 'C' | 'M' | 'E';

  @IsDefined()
  @IsString()
  Tabella!: string;

  @IsDefined()
  @IsString()
  IdAccountCompagnia!: string;

}
