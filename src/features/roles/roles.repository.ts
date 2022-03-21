import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Roles, RolesDocument } from './schemas/roles.schema';
import { Model, FilterQuery } from "mongoose"

@Injectable()
export class RolesRepository {
    constructor(@InjectModel(Roles.name) private rolesModel: Model<RolesDocument>) {}

    async findOne(rolesFilterQuery: FilterQuery<Roles>): Promise<Roles> {
        return this.rolesModel.findOne(rolesFilterQuery)
    }

    async findAll(rolesFilterQuery: FilterQuery<Roles>): Promise<Roles[]> {
        return this.rolesModel.find(rolesFilterQuery)
    }

    async create(role: Roles): Promise<Roles> {
        
        const newRole = new this.rolesModel(role)
        return newRole.save()
    }

    async findOneAndUpdate (userFilterQuery: FilterQuery<Roles>, role: Partial<Roles>): Promise<Roles> {
        return this.rolesModel.findOneAndUpdate(userFilterQuery, role);
    }
}