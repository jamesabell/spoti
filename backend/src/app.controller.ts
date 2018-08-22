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
    return await this.spotiService.updateClientAuthorizationToken(token);
  }

  @Post('/veto')
  async vetoSong(@Body() args) {
    const { user } = args;
    return await this.spotiService.vetoSong(user);
  }

  @Get('/app-data')
  async getAppData() {
    return await this.spotiService.getAppData();
  }

  @Post('add-user')
  addUser(@Body() args) {
    const { user } = args;
    return this.spotiService.addUser(user);
  }
}
