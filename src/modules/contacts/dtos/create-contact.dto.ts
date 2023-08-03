/* eslint-disable prettier/prettier */
import { IsEmail, IsOptional, IsString, IsNotEmpty } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateContactDto {
  @IsString()
  @ApiProperty({
       description: 'Nome do usuário',
       default: 'First Name, Last Name',
       type: String,
  })
  name: string;

  @IsString()
  @IsEmail()
  @ApiProperty({
       description: 'Email do usuário',
       default: 'xxx@gmail.com',
       type: String,
  })
  email: string;


  @IsString()
  @IsNotEmpty()
  tell: string;

  @IsString()
  @IsOptional()
  imageURL: string | null;
}
