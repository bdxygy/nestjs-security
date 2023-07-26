import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExceptionHandler } from './core/config/exception-handler.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1');
  app.useGlobalFilters(new ExceptionHandler());
  await app.listen(3000);
}
bootstrap();
