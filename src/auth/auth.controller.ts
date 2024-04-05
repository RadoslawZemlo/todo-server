import {Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import {Public} from './decoraors/public.decorator';
import {AuthService} from './auth.service';
import {AuthDto} from './dto/auth.dto';
import {AuthGuard} from './auth.guard';
import {TokenDto} from './dto/token.dto';
import {CustomRequest} from './interfaces/custom-request.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Public()
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ValidationPipe())
  register(@Body() authDto: AuthDto): Promise<HttpStatus> {
    return this.authService.register(authDto);
  }

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ValidationPipe())
  login(@Body() authDto: AuthDto): Promise<TokenDto> {
    return this.authService.login(authDto);
  }

  @Get('profile')
  @UseGuards(AuthGuard)
  getProfile(@Request() req: CustomRequest) {
    return req.user;
  }
}
