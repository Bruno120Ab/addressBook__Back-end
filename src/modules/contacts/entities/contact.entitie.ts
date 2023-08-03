/* eslint-disable prettier/prettier */
import { randomUUID } from 'node:crypto';

export class Contact {
  readonly id: string;
  readonly createdAt: Date;

  name: string;
  email: string;
  tell: string;
  imageURL: string | null;
  userId: string;

  updatedAt: Date;

  constructor() {
    this.id = randomUUID();
    console.log(this.imageURL);
    if(this.imageURL === null) this.imageURL = 'AAAA'
  }

}
