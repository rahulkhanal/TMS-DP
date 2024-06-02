import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('department')
@ApiTags("Department")
@ApiResponse({ status: 200, description: "Successful" })
@ApiResponse({ status: 201, description: "Created Successfully" })
@ApiResponse({ status: 401, description: "Unathorised request" })
@ApiResponse({ status: 400, description: "Bad request" })
@ApiResponse({ status: 500, description: "Server Error" })
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) { }

  @Post()
  @ApiOperation({ summary: "Create a department" })
  @ApiBody({ type: CreateDepartmentDto })
  create(@Body() body: CreateDepartmentDto) {
    return this.departmentService.create(body);
  }

  @Get()
  @ApiOperation({ summary: "Get all department" })
  findAll() {
    return this.departmentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: "Get a department" })
  findOne(@Param('id') id: string) {
    return this.departmentService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: "Update a department" })
  update(@Param('id') id: string, @Body() updateDepartmentDto: UpdateDepartmentDto) {
    return this.departmentService.update(id, updateDepartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departmentService.remove(id);
  }
}
