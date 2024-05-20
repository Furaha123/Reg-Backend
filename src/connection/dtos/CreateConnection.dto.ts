import { IsNotEmpty, IsString } from 'class-validator';

export class CreateConnectionDto {
  @IsString()
  @IsNotEmpty()
  names: string;

  @IsString()
  @IsNotEmpty()
  ID: number;

  @IsString()
  @IsNotEmpty()
  UPI: string;
}
