import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeController } from './employees.controller';
import { EmployeeRepository } from './employees.repository';
import { EmployeeService } from './employees.service';
import { Employee, EmployeeSchema } from "./schemas/employees.schema"

@Module({
  imports: [MongooseModule.forFeature([{name: Employee.name, schema: EmployeeSchema}])],
  controllers: [EmployeeController],
  providers: [EmployeeService, EmployeeRepository],
})

export class EmployeesModule {}