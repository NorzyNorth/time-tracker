import { Module } from '@nestjs/common';
import { TimeTrackModule } from './time-track/time-track.module';
import { TelegramBotModule } from './telegram-bot/telegram-bot.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { serverConfig } from './common/config/server.config';
import { typeormConfig } from './common/config/typeorm.config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TelegrafModule } from 'nestjs-telegraf';
import Redis from 'ioredis';
import { session } from 'telegraf';

@Module({
  imports: [
    TimeTrackModule,
    TelegramBotModule,
    ConfigModule.forRoot({
      load: [serverConfig, typeormConfig],
      isGlobal: true,
      expandVariables: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService): Promise<TypeOrmModuleOptions> =>
        configService.get('database') as Promise<TypeOrmModuleOptions>,
      inject: [ConfigService]
    }),
    TelegrafModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        const redis = new Redis({
          host: configService.get<string>('redis.host'),
          port: configService.get<number>('redis.port'),
          password: configService.get<string>('redis.password'),
          username: configService.get<string>('redis.username')
        });
        return {
          token: configService.get('telegraf.token') as string,
          middlewares: [
            session({
              getSessionKey: ctx => (ctx.from ? String(ctx.from.id) : undefined),
              store: {
                async get(key: string) {
                  const value = await redis.get(key);
                  return value ? JSON.parse(value) : undefined;
                },
                async set(key: string, value: any) {
                  await redis.set(key, JSON.stringify(value));
                },
                async delete(key: string) {
                  await redis.del(key);
                }
              }
            })
          ]
        };
      },
      inject: [ConfigService]
    })
  ]
})
export class AppModule {}
