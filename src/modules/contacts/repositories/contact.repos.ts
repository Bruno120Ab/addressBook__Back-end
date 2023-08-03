/* eslint-disable prettier/prettier */
// import { User } from '@prisma/client';
// import { CreateUserDto } from '../dto/create-user.dto';
// import { UpdateUserDto } from '../dto/update-user.dto';

import { Contact } from "@prisma/client";
import { CreateContactDto } from "../dtos/create-contact.dto";
import { UpdateContactDto } from "../dtos/update-contact.dto";

export abstract class ContactRepository {
  abstract create(data: CreateContactDto, userId: string): Promise<Contact> ;
  abstract findOne(id: string): Promise<Contact[]>;
  abstract update(id: string, data: UpdateContactDto): Promise<Contact>;
  abstract delete(id: string): Promise<void>;

}
