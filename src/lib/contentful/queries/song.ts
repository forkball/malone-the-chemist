const SONG_COLLECTION_QUERY = `
    query {
        songCollection {
            items {
                sys {
                    id
                }
                title
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
