import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateServiceDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
