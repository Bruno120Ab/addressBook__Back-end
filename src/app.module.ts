import { AuthModule } from './auth/auth.module';
import { ContactController } from './modules/contacts/contact.controller';
import { ContactModule } from './modules/contacts/contact.module';
import { UsersModule } from './modules/users/user.module';

import { Module } from '@nestjs/common';

@Module({
  imports: [UsersModule, AuthModule, ContactModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
