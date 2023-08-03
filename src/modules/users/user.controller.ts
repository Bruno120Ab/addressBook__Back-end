/* eslint-disable prettier/prettier */

import { Controller, Post, Get, Patch, Body, Param } from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';

@ApiTags('Users')
@Controller('user')
class UserController {
     constructor(private readonly usersService: UserService) {}

     @Post()
     create(@Body() createUserDto:any) {
          return this.usersService.create(createUserDto);
     }

     @Patch(':id')
     update(@Param('id') id:string, @Body() updateUserDto:any) {
          return this.usersService.update(id, updateUserDto);
     }

     @Get()
     findAll() {
       return this.usersService.findAll();
     }
   
     @Get(':id')
     findOne(@Param('id') id: string) {
          return this.usersService.findOne(id);
     }
}


export { UserController }