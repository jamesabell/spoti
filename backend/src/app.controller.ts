import {
  Get,
  Controller,
  Post,
  Param,
  Render,
  Put,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';
import { SpotiService } from 'services/spoti.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly spotiService: SpotiService,
  ) {}

  @Post('/client-access-token')
  async setClientAuthorizationToken(@Body() args): Promise<boolean> {
    const { token } = args;
    return await this.spotiService.setClientAuthorizationToken(token);
  }
}
