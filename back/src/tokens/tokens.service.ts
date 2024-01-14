import { PrismaService } from './../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class TokensService {
  constructor(
    private readonly prismaService:PrismaService,
    private readonly jwtService:JwtService,
    ){}
  
  async create(payload:{userId:string, email:string}) {
    const token = await this.jwtService.signAsync({sub:payload.userId, email:payload.email})
    const added = await this.prismaService.token.create({data:{token, userId:payload.userId}})
    if (!token || !added) throw new BadRequestException('Failed to create a token')
    return token
  }
  
  async remove(token:string) {
    const removed = await this.prismaService.token.delete({where:{token}})
    if(!removed) throw new BadRequestException('Failed to remove a token')
    return true
  }

  async findOne(token: string) {
    return await this.prismaService.token.findFirst({where:{token}});
  }
}
