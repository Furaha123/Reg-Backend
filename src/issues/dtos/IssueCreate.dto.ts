import { IsNotEmpty, IsString } from 'class-validator';
import { ServerResponse } from 'http';

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
  userId: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  user: string;

  @IsString()
  @IsNotEmpty()
  village: string;

  @IsString()
  @IsNotEmpty()
  branch: string;
}
