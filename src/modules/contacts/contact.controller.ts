/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Request } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dtos/create-contact.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateContactDto } from './dtos/update-contact.dto';

@ApiTags('Contact')
@Controller('contacts')
export class ContactController {
  constructor(private contactService: ContactService) { }

  @Post()
  create(@Body() data: CreateContactDto, @Request() req) {
    return this.contactService.create(data, req.body.userId);
  }
  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContact: UpdateContactDto) {
    return this.contactService.update(id, updateContact);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactService.remove(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactService.findOne(id);
  }
}
