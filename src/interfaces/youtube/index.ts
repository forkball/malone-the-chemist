interface YoutubeRelease {
    kind: string;
    etag: string;
    id: {
        kind: string;
        videoId: string;
    }
    snippet: {
        publishedAt: string;
        title: string;
        description: string;
        publishTime: string;
    }
}