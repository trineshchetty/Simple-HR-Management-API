import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {

  const logger = new Logger()
  
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({type: VersioningType.URI})
        
  app.useGlobalPipes(new ValidationPipe());
  
  const config = new DocumentBuilder()
          .setTitle("HR System")
          .setDescription("Simple HR Management System")
          .build()

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup("/swagger", app, document)

  await app.listen(process.env.PORT || 3000).then(() => logger.verbose("Server listening on PORT" + " " + process.env.PORT))
}


bootstrap();