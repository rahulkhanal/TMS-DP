import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/model/sql/user.entity';
import { DataSource, Repository } from 'typeorm';
import { AuthEntity } from 'src/model/sql/auth.entity';
import { DepartmentEntity } from 'src/model/sql/department.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,

    @InjectRepository(AuthEntity)
    private authRepository: Repository<AuthEntity>,

    @InjectRepository(DepartmentEntity)
    private deptRepository: Repository<DepartmentEntity>,

    private dataSource: DataSource

  ) { }
  async create(createUserDto: CreateUserDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    console.log(createUserDto);
    const dept = await this.deptRepository.findOne({ where: { id: createUserDto.department } })
    if (!dept) {
      throw new NotFoundException("Department invalid.")
    }
    try {
      const userModal = new UserEntity()
      userModal.name = createUserDto.name
      userModal.salary = createUserDto.salary
      userModal.joinedDate = createUserDto.joinedDate
      userModal.departments = [dept]
      await this.userRepository.save(userModal);
      // await queryRunner.manager.save(UserEntity, userModal) 

      const authModel = new AuthEntity()
      authModel.email = createUserDto.email
      authModel.password = createUserDto.email
      authModel.rToken = createUserDto.rToken
      // @ts-ignore
      authModel.role = "lkgdj"
      await this.authRepository.save(authModel)
      // await queryRunner.manager.save(AuthEntity, authModel)
      // await queryRunner.commitTransaction();
    } catch (error) {
      // await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // await queryRunner.release();
    } 


  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
