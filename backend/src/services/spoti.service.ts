import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import * as request from 'request-promise';
import * as moment from 'moment';
import { IPlayerInfo, IAppData } from 'common/types';

@Injectable()
export class SpotiService {
  private clientAuthorizationTokens = ['']; // Something to think about
  private clientAuthorizationToken = this.clientAuthorizationTokens[0]; // But not right now
  private clientRefreshToken = '';
  private dannyDevitos = {
    userIds: new Set(),
  };
  private users: {}[] = [];
  private userIds: Set<string> = new Set();
  private playerInfo: IPlayerInfo | null = null;
  private lastUpdate: moment.Moment = moment();

  /**
   * Updates Client Auth token.
   *
   * @todo Move to client service
   * @param token Will use refresh token if this is not set
   */
  public async updateClientAuthorizationToken(token: string = null) {
    try {
      if (!token && this.clientAuthorizationToken === '') {
        return false;
      }

      const grantType = token ? 'authorization_code' : 'refresh_token';
      const code = token ? token : this.clientRefreshToken;

      const accessTokenResponse = await request({
        url: 'https://accounts.spotify.com/api/token',
        method: 'POST',
        form: {
          grant_type: grantType,
          code,
          redirect_uri: 'http://localhost:8081/client-callback',
          client_id: 'e9d5017163e647b7bde7fcd6f1ee9da4',
          client_secret: '93040c16301d4c19b23b88bb7f63151c',
        },
      });
      const json = JSON.parse(accessTokenResponse);
      this.clientAuthorizationToken = json.access_token;
      this.clientRefreshToken = json.refresh_token;
      return true;
    } catch (err) {
      return err;
    }
  }

  /**
   * Determines if the app data is out of sync
   */
  private isOutOfSync(): boolean {
    return moment().diff(this.lastUpdate, 'seconds') > 10;
  }

  /**
   * Updates all the app data if its out of sync
   */
  private async refreshAppData() {
    if (this.isOutOfSync()) {
      await this.setCurrentlyPlaying();
      this.lastUpdate = moment();
    }
  }

  /**
   * Pulls together app data
   */
  public async getAppData(): Promise<IAppData> {
    await this.refreshAppData();
    return {
      clientIsSignedIn: this.clientAuthorizationToken !== '',
      vetoCount: this.dannyDevitos.userIds.size,
      userCount: this.userIds.size,
      playerInfo: this.playerInfo,
    };
  }

  /**
   * Vetos the song
   *
   * @todo Move to song service
   */
  public async vetoSong(user): Promise<IAppData> {
    this.dannyDevitos.userIds.add(user.sub);
    if (this.songShouldBeChanged()) {
      this.changeSong();
    }
    return await this.getAppData();
  }

  /**
   * Determines if a song should be changed
   *
   * @todo move to song service
   */
  private songShouldBeChanged(): boolean {
    return this.dannyDevitos.userIds.size > this.userIds.size / 2;
  }

  /**
   * Sets player data
   *
   * @todo move to song service
   */
  public async setCurrentlyPlaying(): Promise<boolean> {
    try {
      if (await this.updateClientAuthorizationToken()) {
        const response = await axios.get(
          'https://api.spotify.com/v1/me/player',
          {
            headers: {
              Authorization: 'Bearer ' + this.clientAuthorizationToken,
            },
          },
        );

        if (
          this.playerInfo &&
          this.playerInfo.item.id !== response.data.item.id
        ) {
          this.clearVetos();
        }
        this.playerInfo = response.data;
        return true;
      }
    } catch (err) {
      console.log('setCurrentlyPlaying Error', err);
      return false;
    }
  }

  /**
   * Clears all vetos
   */
  private clearVetos() {
    this.dannyDevitos.userIds.clear();
  }

  /**
   * Changes a song
   *
   * @todo move to song service
   */
  private async changeSong() {
    if (await this.updateClientAuthorizationToken()) {
      try {
        const response = await axios.post(
          'https://api.spotify.com/v1/me/player/next',
          {},
          {
            headers: {
              Authorization: 'Bearer ' + this.clientAuthorizationToken,
            },
          },
        );
        await this.setCurrentlyPlaying();
      } catch (err) {
        console.log('Error Changing Song:', err.response.data);
      }
    }
  }

  /**
   * Adds a user
   *
   * @todo move to user service
   */
  public addUser(user: any) {
    if (!this.userIds.has(user.sub)) {
      this.userIds.add(user.sub);
      this.users.push(user);
    }
  }
}
