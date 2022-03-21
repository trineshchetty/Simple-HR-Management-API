import { Controller } from '@nestjs/common';
import { DepartmentService } from "./departments.service";

@Controller()
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}
}