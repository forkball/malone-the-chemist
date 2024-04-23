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
}

export interface SongsQuery {
  songCollection: {
    items: Song[];
  };
}
