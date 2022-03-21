import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

export type DepartmentsDocument = Departments & Document

@Schema()
export class Departments {
    @Prop()
    id: string;

    @Prop()
    name: string

    @Prop()
    manager_id: string

    @Prop()
    status: string
}

export const DepartmentSchema = SchemaFactory.createForClass(Departments)