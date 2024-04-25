export interface Song {
  sys: {
    id: string;
  };
  title: string;
  image: {
    url: string;
    title: string;
    description: string;
  };
  spotify: string;
  appleMusic: string;
  youtube: string;
  latest: boolean;
}

export interface SongsQuery {
  songCollection: {
    items: Song[];
  };
}
