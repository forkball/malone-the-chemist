interface YoutubeRelease {
    kind: string;
    etag: string;
    id: {
        videoId: string;
    }
    snippet: {
        publishedAt: string;
        title: string;
        description: string;
        publishTime: string;
    }
}