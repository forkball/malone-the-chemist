interface Song {
  sys: {
    id: string;
  };
  title: string;
  image: {
    url: string;
    title: string;
    description: string;
  }
}

interface SongCollection {
  songCollection: {
    items: Song[];
  };
}
