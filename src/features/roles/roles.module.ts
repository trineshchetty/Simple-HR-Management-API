import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesController } from './roles.controller';
import { RolesRepository } from './roles.repository';
import { RolesService } from './roles.service';
import { Roles, RolesSchema } from "./schemas/roles.schema"

@Module({
  imports: [MongooseModule.forFeature([{name: Roles.name, schema: RolesSchema}])],
  controllers: [RolesController],
  providers: [RolesService, RolesRepository],
})

export class RolesModule {}