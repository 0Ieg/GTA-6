import { PrismaService } from './../prisma/prisma.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService:PrismaService){}
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
    if(user) throw new BadRequestException('This email is already in use')
    const hashedPassword = await this.hashingPassword(password)
    return await this.prismaService.user.create({data:{email, password:hashedPassword, role:'guest'}})
  }
  async remove(id:string, password:string) {
    const user = await this.findOneById(id)
    if(!user)throw new BadRequestException('The user was not found')
    const isMatchPassword = await bcrypt.compare(password, user.password)
    if(!isMatchPassword) throw new BadRequestException('Invalid password')
    return await this.prismaService.user.delete({where:{id}})
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }
}
