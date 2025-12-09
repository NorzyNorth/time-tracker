import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimeTrackModule } from './time-track/time-track.module';
import { TelegramBotModule } from './telegram-bot/telegram-bot.module';

@Module({
  imports: [TimeTrackModule, TelegramBotModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
