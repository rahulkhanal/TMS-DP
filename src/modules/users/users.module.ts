import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/model/sql/user.entity';
import { AuthEntity } from 'src/model/sql/auth.entity';
import { DepartmentEntity } from 'src/model/sql/department.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, AuthEntity, DepartmentEntity]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule { }
