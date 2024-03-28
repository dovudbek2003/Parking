import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from './common/config';
import { AllExceptionsFilter } from './lib/exceptions-filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();
  app.useBodyParser('json');

  app.setGlobalPrefix('api');

  const httpAdapterHost = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapterHost));

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const options = new DocumentBuilder()
    .setTitle('Parkin')
    .setDescription('this is v1')
    .setVersion('1.0.0')
    .addServer(`http://localhost:${config.port}/`, 'Local environment')
    .addTag('Your API Tag ok')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(config.port, () => {
    console.log(`http://localhost:${config.port}`);
    console.log(`http://localhost:${config.port}/docs`);
  });
}
bootstrap();

