import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentModule } from './modules/department/department.module';
import { UsersModule } from './modules/users/users.module';
import pgConfig from './config/pg.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(pgConfig),
    DepartmentModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
