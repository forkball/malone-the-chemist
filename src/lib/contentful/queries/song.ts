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
                amazonMusic
                tidal
                mediaLinks
                creditsImage {
                  title
                  url
                  description
                }
                albumArt {
                  title
                  url
                  description
                }
            }
        }
    }
`;

export { SONG_COLLECTION_QUERY };
