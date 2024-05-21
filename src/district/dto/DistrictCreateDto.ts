import { IsNotEmpty, IsString } from 'class-validator';

export class DistrictCreateDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  provinceId: string;
}
