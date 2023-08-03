/* eslint-disable prettier/prettier */
import { Exclude } from 'class-transformer';
import { randomUUID } from 'node:crypto';

export class User {
  readonly id: string;
  name: string;
  email: string;
  tell: string;

  readonly createdAt: Date;

  @Exclude()
  password: string;
  updatedAt: Date;


  constructor() {
    this.id = randomUUID();
  }
}

