import { Injectable } from '@nestjs/common';
import { EmployeeRepository } from './employees.repository';
import { Employee } from './schemas/employees.schema';


@Injectable()
export class EmployeeService {

    constructor(private readonly employeeRepo: EmployeeRepository) {}

    async changePassword ({employee_id, old_password, new_password}): Promise<string>
    {
        return;
    }

    async getAllEmployees (query: object): Promise<Employee[]>
    {
        return this.employeeRepo.findAll(query)
    }

    async getEmployee (): Promise<string>
    {
        return;
    }

    async updateEmployee (): Promise<string>
    {
        return;
    }

    async createEmployee (): Promise<string>
    {
        return;
    }

}
