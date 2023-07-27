import { IsEmail, IsNotEmpty } from 'class-validator';
import { UniversalDto } from '../utils/classes/universal-dto/universal-dto';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUpdateUserDto extends PartialType(UniversalDto) {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
