export async function fetchRecentVideos(): Promise<YoutubeRelease[]> {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.YOUTUBE_CHANNEL_ID}&key=${process.env.YOUTUBE_API_KEY}`,
    {
      method: "GET",
      next: { revalidate: 3600 },
    }
  );
  return (await response.json()).items;
}
