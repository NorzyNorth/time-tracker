import { Module } from '@nestjs/common';
import { TimeTrackService } from './time-track.service';
import { TimeTrackController } from './time-track.controller';

@Module({
  providers: [TimeTrackService],
  controllers: [TimeTrackController]
})
export class TimeTrackModule {}
