import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimeTrackModule } from './time-track/time-track.module';
import { TelegramBotModule } from './telegram-bot/telegram-bot.module';
import { ConfigModule } from '@nestjs/config';
import { serverConfig } from './common/config/server.config';
import { typeormConfig } from './common/config/typeorm.config';

@Module({
  imports: [
    TimeTrackModule,
    TelegramBotModule,
    ConfigModule.forRoot({
      load: [serverConfig, typeormConfig],
      isGlobal: true,
      expandVariables: true
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
