import {HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {UsersService} from '../users/users.service';
import {ConfigService} from '@nestjs/config';
import {ConfigConstants} from '../config-constats';
import * as bcrypt from 'bcrypt';
import {AuthDto} from './dto/auth.dto';
import {TokenDto} from './dto/token.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {
  }

  async register(authDto: AuthDto): Promise<HttpStatus> {
    const {username, password} = authDto;
    const hashPassword = await bcrypt.hash(password, 10);
    void this.usersService.createUser(username, hashPassword);
    return;
  }

  async login(authDto: AuthDto): Promise<TokenDto> {
    const {username, password} = authDto;
    const user = await this.usersService.findUser(username);
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch)
      throw new UnauthorizedException('Invalid credentials');

    return {
      access_token: await this.jwtService.signAsync(
        {sub: user._id, username: user.username},
        {secret: this.configService.get<string>(ConfigConstants.JwtSecretKey), expiresIn: '1h'}
      )
    };
  }
}
