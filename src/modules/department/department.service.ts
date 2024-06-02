import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DepartmentEntity } from 'src/model/sql/department.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(DepartmentEntity)
    private departmentRepository: Repository<DepartmentEntity>,
  ) { }
  async create(createDepartmentDto: CreateDepartmentDto): Promise<DepartmentEntity> {
    return await this.departmentRepository.save(createDepartmentDto)
  }

  findAll(): Promise<DepartmentEntity[]> {
    return this.departmentRepository.find()
  }

  findOne(id: string): Promise<DepartmentEntity> {
    return this.departmentRepository.findOne({ where: { id } })
  }

  async update(id: string, updateDepartmentDto: UpdateDepartmentDto): Promise<DepartmentEntity> {
    const existingDta = await this.departmentRepository.findOne({ where: { id } })
    Object.keys(updateDepartmentDto).forEach((key) => {
      if (updateDepartmentDto[key] !== undefined) {
        existingDta[key] = updateDepartmentDto[key];
      }
    });
    return await this.departmentRepository.save(existingDta);
  }

  async remove(id): Promise<boolean> {
    const resp = await this.departmentRepository.delete({ id })
    return resp.affected ? true : false
  }
}
