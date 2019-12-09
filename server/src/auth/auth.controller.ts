import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { ICredentials } from './auth.interface';
import { Response } from 'express';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  login(
    @Res() res: Response,
    @Body() credentials: ICredentials
  ): void {
    const user = this.authService.login(credentials);

    res.status(HttpStatus.OK).send(user);
  }
}
