/* eslint-disable prettier/prettier */
import { PrismaService } from 'src/database/prisma.service';
import { CreateContactDto } from '../../dtos/create-contact.dto';
import { Contact  } from '../../entities/contact.entitie';
import { ContactRepository,  } from '../contact.repos';
import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { UpdateContactDto } from '../../dtos/update-contact.dto';

@Injectable()
export class ContactPrismaRepository implements ContactRepository {
  constructor(private prisma: PrismaService) { }

  async create(data: CreateContactDto, userId: string): Promise<Contact> {
    const contact = new Contact();

    Object.assign(contact, {
      ...data,
    });

    const newContact = await this.prisma.contact.create({
      data: {
        id: contact.id,
        name: contact.name,
        email: contact.email,
        tell: contact.tell,
        imageURL: contact.imageURL == null ? process.env.IMAGES_NOTPROFILE : contact.imageURL ,
        userId,
      },
    });

    return plainToInstance(Contact, newContact);
  }

  async update(id: string, data:UpdateContactDto): Promise<Contact>{
    if( data.imageURL == null)  data.imageURL = process.env.IMAGES_NOTPROFILE 

    const contact = await this.prisma.contact.update({
      where: { id },
      data: { ...data },
   });

    return contact;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.contact.delete({
      where: { id },
    });
  }

  async findOne(id: string): Promise<Contact[]> {
    const music = await this.prisma.contact.findMany({
      where: { userId: id },
    });
    return music;
  }
}
