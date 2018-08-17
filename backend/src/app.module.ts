import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpotiService } from './services/spoti.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SpotiService],
})
export class AppModule { }
