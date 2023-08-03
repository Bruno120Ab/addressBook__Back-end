/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UsersRepository } from './repositories/user.repos';
import { UsersPrismaRepository } from './repositories/prisma/user.prisma.repos';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    PrismaService,
    {
      provide: UsersRepository,
      useClass: UsersPrismaRepository,
    },
  ],
  exports: [UserService],
})
export class UsersModule {}
