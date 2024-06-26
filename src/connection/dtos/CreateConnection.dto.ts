import { IsNotEmpty, IsString } from 'class-validator';

export class CreateConnectionDto {
  @IsString()
  @IsNotEmpty()
  names: string;

  @IsString()
  @IsNotEmpty()
  nid: number;

  villageId: string;
  @IsString()
  @IsNotEmpty()
  upi: string;

  branchId: string;
  village: string;
  branch: string;
}
