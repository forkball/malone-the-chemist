export async function fetchRecentVideos(): Promise<YoutubeRelease[]> {
  try {
    const simpleVideos = await fetch(
      `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${process.env.YOUTUBE_CHANNEL_ID}&key=${process.env.YOUTUBE_API_KEY}&maxResults=20`,
      {
        method: "GET",
        next: { revalidate: 3600 },
      }
    );

    const simpleVideoData = await simpleVideos.json();
    
    const videoIds = simpleVideoData.items.map((item: any) => item.id.videoId).join(',');
    const detailsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id=${videoIds}&key=${process.env.YOUTUBE_API_KEY}`,
      {
        method: "GET",
        next: { revalidate: 3600 },
      }
    );
    
    const detailsData = await detailsResponse.json();
    
    return detailsData.items.filter((item: any) => {
      const duration = item.contentDetails.duration;
      const durationInSeconds = parseDuration(duration);
      
      return durationInSeconds >= 60;
    }).map((item: any) => ({
      ...item,
      id: { videoId: item.id }
    })).slice(0, 5);
  } catch {
    return [];
  }
}

function parseDuration(duration: string): number {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;
  
  const hours = parseInt(match[1] || '0');
  const minutes = parseInt(match[2] || '0');
  const seconds = parseInt(match[3] || '0');
  
  return hours * 3600 + minutes * 60 + seconds;
}
