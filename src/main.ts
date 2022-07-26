import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  // const field = await client.$("~welcome/showLoginScreenPress");
  // await field.click()
  // const loginTest = new LoginTestCase(client)
  // await loginTest.testPass()
}
bootstrap();
