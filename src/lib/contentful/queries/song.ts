const SONG_COLLECTION_QUERY = `
    query {
        songCollection {
            items {
                title
                latest
                spotify
                appleMusic
                youtube
                soundcloud
                image {
                  title
                  url
                  description
                }
            }
        }
    }
`;

export { SONG_COLLECTION_QUERY };
