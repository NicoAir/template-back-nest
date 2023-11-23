import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    // swagger title
    .setTitle('Flexyte API')
    // swagger description
    .addBearerAuth({
      type: 'http', scheme: 'bearer', bearerFormat: 'JWT'
    }, 'acces-token'
    )
    //your api version
    .setVersion('1.0.0')
    .build();

const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true,
      skipUndefinedProperties: false
    }
  ));
  await app.listen(3000);
}
bootstrap();
