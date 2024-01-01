import { SigninAuthDto } from './dto/signin-auth.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('signin')
  signin(@Body() body:SigninAuthDto){
    return this.authService.signin(body.email, body.password)
  }

  @Get('refresh')
  refresh() {
    return this.authService.refresh();
  }
}
