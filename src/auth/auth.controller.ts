import {Body, Controller, HttpCode, HttpStatus, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthDto} from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ValidationPipe())
  register(@Body() authDto: AuthDto): Promise<HttpStatus> {
    return this.authService.register(authDto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ValidationPipe())
  login(@Body() authDto: AuthDto): Promise<HttpStatus> {
    return this.authService.login(authDto);
  }
}
