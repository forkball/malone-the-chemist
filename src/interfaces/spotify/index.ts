export interface Tokens {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface Album {
  id: string;
  name: string;
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  href: string;
  images: { url: string; height: number; width: number }[];
}

export interface ArtistLatestReleases {
  id: string;
  name: string;
}
