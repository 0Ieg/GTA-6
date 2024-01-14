import { TokensService } from './../tokens/tokens.service';
import { UsersService } from './../users/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService:UsersService,
    private readonly jwtService:JwtService,
    private readonly tokensService:TokensService
    ){}
  async validateUser(email:string, password:string) {
    const user = await this.usersService.findOneByEmail(email)
    if(user){
      const isMatch = await bcrypt.compare(password, user.password)
      if(isMatch){
        const {password, ...other} = user
        return {...other}
      }else throw new UnauthorizedException('Email or password entered incorrectly')
    }else throw new UnauthorizedException('The user with this email was not found')
  }

  async login(userId:string, email:string) {
    const access_token = await this.tokensService.create({userId,email})
    return {id:userId, access_token}
  }
  async logout(token:string){
    return await this.tokensService.remove(token)
  }
  
  refresh() {
    return `This action returns all auth`;
  }
}
