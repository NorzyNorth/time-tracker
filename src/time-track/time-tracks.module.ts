import { Module } from '@nestjs/common';
import { TimeTracksService } from './time-tracks.service';
import { TimeTracksController } from './time-tracks.controller';

@Module({
  providers: [TimeTracksService],
  controllers: [TimeTracksController]
})
export class TimeTracksModule {}
