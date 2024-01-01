import { UsersService } from './../users/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(private readonly usersService:UsersService){}
  async signin(email:string, password:string) {
    const user = await this.usersService.findOneByEmail(email)
    if(user){
      const isMatch = await bcrypt.compare(password, user.password)
      if(isMatch){
        const {password, ...other} = user
        return other
      }else throw new UnauthorizedException('Email or password entered incorrectly')
    }else throw new UnauthorizedException('The user with this email was not found')
  }

  refresh() {
    return `This action returns all auth`;
  }

  update(id: number) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
