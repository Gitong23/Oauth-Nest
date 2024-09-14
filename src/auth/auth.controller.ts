import { Controller, Post, UseGuards, Request, Res, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { Response } from 'express';
import { GoogleAuthGuard } from './google-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  // login(@Request() req) {
  //   return this.authService.login(req.user);
  // }
  async login(@Request() req: any, @Res({ passthrough: true }) res: Response) {
    const { accessToken } = await this.authService.login(req.user);
    res.cookie('accessToken', accessToken, {
      httpOnly: true,
    });
    return { message: 'Successfully logged in' };
  }

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  async googleAuth(@Request() req) {
    // Initiates the Google OAuth process
  }

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async googleAuthRedirect(@Request() req, @Res() res: Response) {
    const { accessToken } = await this.authService.googleLogin(req);
    res.cookie('access_token', accessToken, {
      httpOnly: true,
    });
    res.redirect('/user/profile');
  }

  // เพิ่ม logout
  @Get('logout')
  async logout(@Request() req, @Res() res: Response) {
    res.clearCookie('jwt token', {
      httpOnly: true,
    });
    return res.json({ message: 'Successfully logged out' });
  }
}
