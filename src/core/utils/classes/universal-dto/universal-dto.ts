import { IsEmail, IsNotEmpty, IsDate, IsString } from 'class-validator';

export class UniversalDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsDate()
  createdAt: Date;

  @IsNotEmpty()
  @IsDate()
  updatedAt: Date;

  @IsNotEmpty()
  @IsDate()
  deletedAt: Date;
}
