import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swagger } from './swagger';
import { ServerMode } from './common/types/server-mods.type';

const logger = new Logger('Bootstrap');

(async () => {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const PORT = configService.get('server.port');
  const serverMode: ServerMode = configService.get('server.mode') as ServerMode;

  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  app.setGlobalPrefix('api');

  if (serverMode === 'dev') swagger(app);

  await app.listen(PORT, () => {
    logger.log(`Server started on port: ${PORT}`);
  });
})().catch(error => {
  logger.error(error);
  process.exit(1);
});
