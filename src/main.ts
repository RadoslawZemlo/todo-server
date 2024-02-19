import {NestFactory} from '@nestjs/core';
import {FastifyAdapter, NestFastifyApplication} from '@nestjs/platform-fastify';
import {AppModule} from './app.module';
import {ConfigService} from '@nestjs/config';
import {ConfigConstants} from './config-constats';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  const configModule = app.get(ConfigService);
  app.enableCors(({
    origin: configModule.get(ConfigConstants.ClientUrl),
    credentials: true
  }));
  await app.listen(configModule.get(ConfigConstants.Port));
}
bootstrap();
