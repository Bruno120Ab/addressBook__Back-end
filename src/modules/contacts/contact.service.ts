/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dtos/create-contact.dto';
import { ContactRepository } from './repositories/contact.repos';
import { UpdateContactDto } from './dtos/update-contact.dto';

@Injectable()
export class ContactService {
  constructor(private contactRepository: ContactRepository) { }

  async create(data: CreateContactDto, userId: string) {
    return await this.contactRepository.create(data, userId);
  }

  async update(id: string, data:UpdateContactDto) {
    return await this.contactRepository.update(id, data)
  }

  async remove(id: string) {
    const findContact = await this.contactRepository.findOne(id);

    if (!findContact) throw new NotFoundException('Contact Not found');

    return this.contactRepository.delete(id);
  }

  async findOne(id: string) {
    const music = await this.contactRepository.findOne(id);

    if (!music) throw new NotFoundException('Contact not found');
    
    return music;
  }
}
