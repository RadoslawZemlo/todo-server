import {HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {UsersService} from '../users/users.service';
import {AuthDto} from './dto/auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {
  }

  async register(authDto: AuthDto): Promise<HttpStatus> {
    const {username, password} = authDto;
    const hashPassword = await bcrypt.hash(password, 10);
    void this.usersService.createUser(username, hashPassword);
    return;
  }

  async login(authDto: AuthDto): Promise<HttpStatus> {
    const {username, password} = authDto;
    const user = await this.usersService.findUser(username);
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch)
      throw new UnauthorizedException('Invalid credentials');
    return;
  }
}
