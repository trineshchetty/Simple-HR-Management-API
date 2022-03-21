import { Controller } from '@nestjs/common';
import { EmployeeService } from "./employees.service";

@Controller()
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}
}