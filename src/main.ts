import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { baseURL } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap().then(() => {
  console.log(`Server is running in ${baseURL}`);
});
