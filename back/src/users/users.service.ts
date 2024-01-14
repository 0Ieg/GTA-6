import { JwtService } from '@nestjs/jwt';
import { PrismaService } from './../prisma/prisma.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService:PrismaService, private readonly jwtService:JwtService){}
  private async hashingPassword(password:string){
    return bcrypt.hash(password, bcrypt.genSaltSync(11))
  }
  async findOneByEmail(email: string) {
    return await this.prismaService.user.findFirst({where:{email}})
  }
  async findOneById(id: string) {
    return await this.prismaService.user.findFirst({where:{id}})
  }
  async findOneByEmailOrId(emailOrId: string) {
    return await this.prismaService.user.findFirst({where:{OR:[{email:emailOrId}, {id:emailOrId}]}})
  }
  async findAll() {
    return await this.prismaService.user.findMany();
  }
  async create(email:string, password:string) {
    const user = await this.findOneByEmail(email)
    if(user)throw new BadRequestException('This email is already in use')
    const hashedPassword = await this.hashingPassword(password)
    const newUser = await this.prismaService.user.create({data:{email, password:hashedPassword, role:'guest'}})
    const access_token = await this.jwtService.signAsync({sub:newUser.id, email:newUser.email})
    return {newUser, access_token}
  }
  async remove(id:string, password:string) {
    const user = await this.findOneById(id)
    if(!user)throw new BadRequestException('The user was not found')
    const isMatchPassword = await bcrypt.compare(password, user.password)
    if(!isMatchPassword) throw new BadRequestException('Invalid password')
    return await this.prismaService.user.delete({where:{id}})
  }

  async update(id: string, body: UpdateUserDto) {
    const user = await this.findOneById(id)
    if(!user)throw new BadRequestException('The user was not found')
    const filtered = await this.filtered(body, 'role')
    return await this.prismaService.user.update({where:{id}, data:{...filtered}})
  }
  async clearTokens(id:string) {
    // const cleared = await this.prismaService.token.delete()
  }
  async filtered(body:any, key:string){
    delete body?.[key]
    return body
  }
}
