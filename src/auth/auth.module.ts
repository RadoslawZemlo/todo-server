import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';
import {UsersModule} from '../users/users.module';
import {JwtModule, JwtService} from '@nestjs/jwt';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {AuthGuard} from './auth.guard';
import {APP_GUARD} from '@nestjs/core';
import {ConfigConstants} from '../config-constats';

@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        global: true,
        secret: configService.get<string>(ConfigConstants.JwtSecretKey),
        signOptions: {expiresIn: '1h'}
      }),
      inject: [ConfigService]
    })
  ],
  providers: [
    AuthService,
    JwtService,
    ConfigService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ],
  controllers: [AuthController]
})
export class AuthModule {
}
