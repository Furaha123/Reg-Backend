import { IsNotEmpty, IsString } from 'class-validator';

export class IssueCreateDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  phone: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  province: string;

  @IsString()
  @IsNotEmpty()
  district: string;

  @IsString()
  @IsNotEmpty()
  sector: string;
}
