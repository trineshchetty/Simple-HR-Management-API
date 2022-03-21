import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

export type EmployeeDocument = Employee & Document

@Schema()
export class Employee {
    @Prop()
    id: string;

    @Prop()
    name: string

    @Prop()
    surname: string

    @Prop() 
    tel: string

    @Prop()
    email: string

    @Prop()
    manager: string

    @Prop()
    status: string

    @Prop()
    password: string
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee)