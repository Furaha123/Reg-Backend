import { IsNotEmpty, IsString } from 'class-validator';

export class BranchCreateDto {
  @IsString()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsNotEmpty()
  Contacts: number;
}
