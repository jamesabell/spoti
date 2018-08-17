import * as SpotifyWebApi from 'spotify-web-api-node';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class SpotiService {
  private clientAuthorizationTokens = ['']; // Something to think about
  private clientAuthorizationToken = this.clientAuthorizationTokens[0]; // But not right now
  private dannyDevitos = {
    songId: '', // When a new vote comes in check the song ID, if the song ID is not the same wipe the votes and change this ID
    userIds: [],
  };
  private users: { name: string; token: string }[] = [
    {
      name: 'bob',
      token: '9us98fy9yi2he0h0jnsd',
    },
  ]; // IDFK, but we will need users, even if they are hard coded for mvp

  /**
   * Changes the client authorization token
   * @todo This will likely need to account for multiple client logins down the road.
   *       Just something to keep in mind.
   */
  public async setClientAuthorizationToken(token: string) {
    if (await this.validateClientAuthorizationToken(token)) {
      this.clientAuthorizationToken = token;
      return true;
    }

    throw new HttpException(
      'Access Token Invalid',
      HttpStatus.UNPROCESSABLE_ENTITY,
    );
  }

  private async validateClientAuthorizationToken(
    token: string,
  ): Promise<boolean> {
    try {
      const response = await axios.get('https://api.spotify.com/v1/me', {
        headers: { Authorization: token },
      });
      return true;
    } catch (err) {
      return false;
    }
  }

  private getClientAuthorizationToken() {
    return this.clientAuthorizationToken;
  }

  public vetoSong(user) {}

  /**
   * Changes a song
   */
  private async changeSong(req) {
    // try {
    //     request({
    //         url: 'https://accounts.spotify.com/api/token',
    //         method: 'POST',
    //         auth: clientCredentials
    //             body: {
    //             scope: 'user-modify-playback-state',
    //         },
    //         form: {
    //             grant_type: 'client_credentials',
    //             scope: 'user-modify-playback-state',
    //         },
    //     }, (err, res) => {
    //         const json = JSON.parse(res.body);
    //         // console.log(json.scope);
    //         request({
    //             url: 'https://api.spotify.com/v1/me/player/next',
    //             method: 'POST',
    //             auth: {
    //                 bearer: json.access_token,
    //             },
    //             form: {
    //                 scope: 'user-modify-playback-state',
    //             },
    //         }, (err, res) => {
    //             console.log(err)
    //             console.log(res.body)
    //             // const json = JSON.parse(res.body);
    //         });
    //     });
    //     // console.log(await spotifyApi.skipToNext());
    // } catch (error) {
    //     return error;
    // }
  }
}
