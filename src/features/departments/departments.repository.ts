import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Departments, DepartmentsDocument } from './schemas/departments.schema';
import { Model, FilterQuery } from "mongoose"

@Injectable()
export class DepartmentRepository {
    constructor(@InjectModel(Departments.name) private departmentModel: Model<DepartmentsDocument>) {}

    async findOne(departmentFilterQuery: FilterQuery<Departments>): Promise<Departments> {
        return this.departmentModel.findOne(departmentFilterQuery)
    }

    async findAll(departmentFilterQuery: FilterQuery<Departments>): Promise<Departments[]> {
        return this.departmentModel.find(departmentFilterQuery)
    }

    async create(department: Departments): Promise<Departments> {
        
        const newDepartment = new this.departmentModel(department)
        return newDepartment.save()
    }

    async findOneAndUpdate (departmentFilterQuery: FilterQuery<Departments>, department: Partial<Departments>): Promise<Departments> {
        return this.departmentModel.findOneAndUpdate(departmentFilterQuery, department);
    }
}