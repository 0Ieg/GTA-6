import { SigninAuthDto } from './dto/signin-auth.dto';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  login(@Req() req:any){
    return this.authService.login(req.user.id, req.user.email)
  }

  @Get('refresh')
  refresh() {
    return this.authService.refresh();
  }
}
