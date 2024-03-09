import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {MongooseModule} from '@nestjs/mongoose';
import {TodosModule} from './todos/todos.module';
import {ConfigConstants} from './config-constats';
import {ConfigService} from '@nestjs/config';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>(ConfigConstants.MongoUrl),
      }),
      inject: [ConfigService],
    }),
    TodosModule,
    CategoriesModule
  ]
})
export class AppModule {
}
