import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

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
  remove(@Req() req:any, @Body() password:string) {
    return this.usersService.remove(req.id, password);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }
}
