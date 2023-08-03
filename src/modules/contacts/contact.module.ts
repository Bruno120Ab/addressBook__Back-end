/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { PrismaService } from 'src/database/prisma.service';
import { ContactRepository } from './repositories/contact.repos';
import { ContactPrismaRepository } from './repositories/prisma/contact.prisma.repository';

@Module({
  controllers: [ContactController],
  providers: [
    ContactService,
    PrismaService,
    {
      provide: ContactRepository,
      useClass: ContactPrismaRepository,
    },
  ],
})
export class ContactModule { }
