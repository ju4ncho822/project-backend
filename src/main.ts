import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({origin:"http://localhost:3001"})
  const config = new DocumentBuilder()
  .addBearerAuth()
  .setTitle('MI API documentation')
  .setDescription('API description')
  .setVersion('1.0')
  .addTag('items')
  .build();
const documentFactory = () => SwaggerModule.createDocument(app, config);
SwaggerModule.setup('documentation', app, documentFactory);
  app.useGlobalPipes(new ValidationPipe());
const port = process.env.PORT || 3000;
  await app.listen(port);
}
bootstrap();
