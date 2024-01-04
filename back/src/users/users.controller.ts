import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JWTReqType } from 'src/auth/strategies/jwt.strategy';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('all')
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.usersService.findAll();
  }
  
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.usersService.findOneById(id);
  }

  @Post()
  create(@Body() body: CreateUserDto) {
    return this.usersService.create(body.email, body.password);
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  remove(@Req() req:JWTReqType, @Body() password:string) {
    return this.usersService.remove(req.user.id, password);
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  update(@Req() req:JWTReqType, @Body() body: UpdateUserDto) {
    return this.usersService.update(req.user.id, body);
  }
}
