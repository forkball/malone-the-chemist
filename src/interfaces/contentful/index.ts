export interface ContentFetch {
  status: number;
  data: any;
}

export interface Song {
  sys: {
    id: string;
  };
  title: string;
  albumArt: {
    url: string;
    title: string;
    description: string;
  };
  creditsImage: {
    url: string;
    title: string;
    description: string;
  };
  spotify: string;
  appleMusic: string;
  youtube: string;
  soundcloud: string;
  tidal: string;
  amazonMusic: string;
  latest: boolean;
  mediaLinks?: string[];
}

export interface SongsQuery {
  songCollection: {
    items: Song[];
  };
}
