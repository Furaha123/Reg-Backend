import { IsNotEmpty, IsString } from 'class-validator';

export class SectorCreateDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  districtId: string;

  @IsString()
  @IsNotEmpty()
  branchId: string;
}
