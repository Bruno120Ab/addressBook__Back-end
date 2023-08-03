/* eslint-disable prettier/prettier */
import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { UsersRepository } from './repositories/user.repos';

@Injectable()
class UserService {
     constructor(private usersRepository: UsersRepository) {}

     async create(userDto: any) {
          const findUser = await this.usersRepository.findByEmail(
               userDto.email,
          );
         
          if (findUser) throw new ConflictException('email already exists');
         
          const user = await this.usersRepository.create(userDto);

          return user;
     }

     
     async findAll() {
          return this.usersRepository.findAll();
     }
 
     async findByEmail(email: string) {
          const findUser = await this.usersRepository.findByEmail(email);
      
          return findUser;
     }
  
     async findOne(id: string) {
          const findUser = await this.usersRepository.findOne(id);

          if (!findUser) throw new NotFoundException('User Not found');
      
          return findUser;
     }

     async update(id: string, userDto: any) {
          const findUser = await this.usersRepository.findOne(id);

          if (!findUser) throw new NotFoundException('User Not found');
      
          return this.usersRepository.update(id, userDto);
     }

     async remove(id: string) {
          const findUser = await this.usersRepository.findOne(id);

          if (!findUser) throw new NotFoundException('User Not found');
      
          return this.usersRepository.delete(id);
     }
     
}

export { UserService } 