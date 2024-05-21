import { IsNotEmpty, IsString } from 'class-validator';

export class ProvinceCreateDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
