import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from 'src/auth/dto';
import { AuthService } from './auth.service';
import { Tokens } from './types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/local/signup')
  signupLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signupLocal(dto);
  }

  @Post('/local/signin')
  signinLocal() {
    return this.authService.signinLocal();
  }

  @Post('/logout')
  logout() {
    return this.authService.logout();
  }

  @Post('/refresh')
  refreshTokens() {
    return this.authService.refreshTokens();
  }
}
