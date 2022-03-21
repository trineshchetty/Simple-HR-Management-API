import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentController } from './departments.controller';
import { DepartmentRepository } from './departments.repository';
import { DepartmentService } from './departments.service';
import { Departments, DepartmentSchema } from "./schemas/departments.schema"

@Module({
  imports: [MongooseModule.forFeature([{name: Departments.name, schema: DepartmentSchema}])],
  controllers: [DepartmentController],
  providers: [DepartmentService, DepartmentRepository],
})

export class DepartmentsModule {}