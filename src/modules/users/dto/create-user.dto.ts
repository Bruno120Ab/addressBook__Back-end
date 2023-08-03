/* eslint-disable prettier/prettier */
import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';
import { hashSync } from 'bcryptjs';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
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
     @MinLength(8)
     @IsNotEmpty()
     @Transform(({ value }: { value: string }) => hashSync(value, 10), {
          groups: ['transform'],
     })
     password: string;

     @IsString()
     @IsNotEmpty()
     tell: string;

     
}
