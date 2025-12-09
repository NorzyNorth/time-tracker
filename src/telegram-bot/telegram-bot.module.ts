import { Module } from '@nestjs/common';
import { TelegramBotService } from './telegram-bot.service';
import { TelegramBotController } from './telegram-bot.controller';

@Module({
  providers: [TelegramBotService],
  controllers: [TelegramBotController]
})
export class TelegramBotModule {}
