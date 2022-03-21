import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"


export type RolesDocument = Roles & Document

type scopes = "*" | "own"
type user_types = "employee" | "managers" | "admin" | "super_user"


// custom_claim inside JWT
// const employee_role = {
//     id: 1,
//     name: "employee_role",
//     priviledges: [
//         {
//             module_name: "employees",
//             action: "read",
//             scope: "own",
//             user_type: "employee",
//         },
//         {
//             module_name: "employees",
//             action: "update",
//             scope: "own",
//             user_type: "employee",
//             immutable_values: ["manager", "status"]
//         },

//     ]
// }

// const manager_role = {
//     id: 1,
//     name: "manager_role",
//     priviledges: [
//         {
//             module_name: "employees",
//             action: "read",
//             scope: "own",
//             user_type: "manager"
//         },
//         {
//             module_name: "departments",
//             action: "read",
//             scope: "own",
//             user_type: "manager"
//         },
//         {
//             module_name: "employees",
//             action: "update",
//             scope: "own",
//             user_type: "manager",
//             immutable_values: ["manager", "status"]
//         },
//     ]
// }

// const admin_role = {
//     id: 1,
//     name: "admin_role",
//     priviledges: {
//         "employees":
//         [
//             {
//                 module_name: "employees",
//                 action: "read",
//                 scope: "*",
//                 access_type: "admin"
//             },
//         ],
//         "departments":
//         [
//             {
//                 module_name: "departments",
//                 action: "read",
//                 scope: "*",
//                 access_type: "admin"
//             },
//         ]
//     }

// }

// const super_user_role = {
//     id: 1,
//     name: "super_user_role",
//     priviledges: ["*"]
// }

class Priviledges {
    
    @Prop()
    module_name: string;

    @Prop()
    action: string;

    @Prop()
    scope: scopes;

    @Prop()
    user_type: user_types
}

@Schema()
export class Roles {
    @Prop()
    id: string;

    @Prop()
    name: string

    @Prop()
    priviledges: Priviledges[]
}

export const RolesSchema = SchemaFactory.createForClass(Roles)