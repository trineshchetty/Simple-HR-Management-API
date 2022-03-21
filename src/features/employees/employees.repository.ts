import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee, EmployeeDocument } from './schemas/employees.schema';
import { Model, FilterQuery } from "mongoose"

@Injectable()
export class EmployeeRepository {
    constructor(@InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>) {}

    async findOne(employeeFilterQuery: FilterQuery<Employee>): Promise<Employee> {
        return this.employeeModel.findOne(employeeFilterQuery)
    }

    async findAll(employeeFilterQuery: FilterQuery<Employee>): Promise<Employee[]> {
        return this.employeeModel.find(employeeFilterQuery)
    }

    async create(employee: Employee): Promise<Employee> {
        
        const newEmployee = new this.employeeModel(employee)
        return newEmployee.save()
    }

    async findOneAndUpdate (employeeFilterQuery: FilterQuery<Employee>, employee: Partial<Employee>): Promise<Employee> {
        return this.employeeModel.findOneAndUpdate(employeeFilterQuery, employee);
    }
}