export interface IAppData {
  clientIsSignedIn: boolean;
  vetoUserIds: string[];
  userCount: number;
  users: {};
  playerInfo: IPlayerInfo;
}

export interface IPlayerInfo {
  device: {};
  shuffle_state: boolean;
  repeat_state: string; // on | off
  timestamp: number;
  context: {};
  progress_ms: number;
  item: {
    album: {
      album_type: string;
      artists: {
        external_urls: { spotify: string };
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
      }[];
      available_markets: string[];
      external_urls: {};
      href: string;
      id: string;
      images: { height: number; url: string; width: number }[];
      name: string;
      release_date: string;
      release_date_precision: string;
      total_tracks: number;
      type: string;
      uri: string;
    };
    artists: {
      external_urls: {};
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
    }[];
    available_markets: string[];
    disc_number: number;
    duration_ms: string;
    explicit: boolean;
    external_ids: {};
    external_urls: {};
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
  };
  is_playing: boolean;
}
