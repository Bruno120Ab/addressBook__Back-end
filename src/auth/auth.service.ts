/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/modules/users/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validatedUser(userEmail: string, userPassword: string) {
    const user = await this.userService.findByEmail(userEmail);
    if (user) {
      const passwordMatch = await compare(userPassword, user.password);
      console.log(user.password, userPassword, passwordMatch);

      if (passwordMatch) {
        console.log(user.password, userPassword);

        return { email: user.email };
      }
    }

    return null;
  }

  async login(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    const validatedUser = await this.userService.findByEmail(email);
      // if (validatedUser) {
      //   const passwordMatch = await compare(userPassword, user.password);
      //   if (passwordMatch) {
      //     return { email: user.email };
      //   }
      // }
      
      if( validatedUser.password !== password || !validatedUser) throw new NotFoundException('User not found');

      if( validatedUser && validatedUser.password === password ) {
        return {
          data: {
            id: validatedUser.id,
            email: validatedUser.email,
            name: validatedUser.name,
            tell: validatedUser.tell,
          },
          token: this.jwtService.sign({ email }, { subject: user.id }),
        };
      }

  }
}
