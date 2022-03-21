import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { RolesModule } from "./features/roles/roles.module"
import "dotenv/config"


@Module({
  imports: [RolesModule,  MongooseModule.forRoot(`mongodb+srv://${process.env.DATABASE_HOST}:${process.env.DATABASE_PASSWORD}@cluster0.xiee3.mongodb.net/tech-genius`)],
  controllers: [AppController],
  providers: [AppService],
})




export class AppModule {}
