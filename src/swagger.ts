import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as basicAuth from 'express-basic-auth';

export function swagger(app: INestApplication): INestApplication {
  const configService = app.get(ConfigService);
  app.use(
    ['/docs'],
    basicAuth({
      challenge: true,
      users: {
        [configService.get('swagger.user') as string]: configService.get('swagger.password') as string
      }
    })
  );
  const config = new DocumentBuilder()
    .setTitle('API Time Tracker')
    .setVersion(process.env.npm_package_version as string)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  return app;
}
