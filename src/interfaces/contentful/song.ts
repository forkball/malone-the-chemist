interface Song {
  sys: {
    id: string;
  };
  title: string;
}

interface SongCollection {
  songCollection: {
    items: Song[];
  };
}
