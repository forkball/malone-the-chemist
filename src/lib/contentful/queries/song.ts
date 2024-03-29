const SONG_COLLECTION_QUERY = `
    query {
        songCollection {
            items {
                sys {
                    id
                }
                title
            }
        }
    }
`;

export { SONG_COLLECTION_QUERY };
