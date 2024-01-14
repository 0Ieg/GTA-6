import { User } from './../users/entities/user.entity';

import { SigninAuthDto } from './dto/signin-auth.dto';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  login(@Req() req:any){
    return this.authService.login(req.user.id, req.user.email)
  }
  @Post('logout')
  @UseGuards(JwtAuthGuard)
  logout(@Req() req:any){
    const token = req.headers.authorization.replace('Bearer ','')
    return this.authService.logout(token)
  }

  @Get('refresh')
  @UseGuards(JwtAuthGuard)
  refresh(@Req() req:any) {
    return this.authService.refresh();
  }
}
