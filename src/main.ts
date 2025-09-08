import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestMethod, ValidationPipe } from '@nestjs/common';
import { VersioningType } from '@nestjs/common';
import { AllExceptionsFilter } from './response/HttpException.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  if (process.env.NODE_ENV !== 'production') {
    app.enableCors();
  }
  app.useGlobalFilters(new AllExceptionsFilter());
  app.setGlobalPrefix('api', {
    exclude: ['docs', 'app', { path: '/', method: RequestMethod.GET }],
  });
  app.enableVersioning({
    defaultVersion: '1',
    type: VersioningType.URI,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();
