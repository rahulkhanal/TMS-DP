import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import pgConfig from './config/pg.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(pgConfig),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
