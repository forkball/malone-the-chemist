const API_BASE = "https://www.googleapis.com/youtube/v3";
const MAX_VIDEOS = 5;
// Fallback only: how many pages of 50 uploads to scan before giving up.
const MAX_UPLOAD_PAGES = 5;
// Shorts can run up to 3 minutes, so duration alone can't separate them;
// the fallback also checks for a #shorts tag.
const MIN_DURATION_SECONDS = 60;

export async function fetchRecentVideos(): Promise<YoutubeRelease[]> {
  try {
    return await fetchLongFormUploads();
  } catch (error) {
    console.error("[youtube] Long-form playlist failed, falling back to filtering all uploads:", error);
  }

  try {
    return await fetchUploadsExcludingShorts();
  } catch (error) {
    console.error("[youtube] Failed to fetch recent videos:", error);
    return [];
  }
}

// Every channel has an auto-generated "UULF" playlist holding only its
// long-form uploads (no Shorts). It's undocumented, hence the fallback below.
async function fetchLongFormUploads(): Promise<YoutubeRelease[]> {
  const playlist = await youtubeGet("playlistItems", {
    part: "snippet,contentDetails,status",
    playlistId: channelPlaylistId("UULF"),
    maxResults: "50",
  });

  const releases = playlist.items
    .filter((item: any) => item.status?.privacyStatus === "public")
    .slice(0, MAX_VIDEOS)
    .map((item: any) =>
      toRelease(
        item.contentDetails.videoId,
        item.etag,
        item.snippet,
        item.contentDetails.videoPublishedAt
      )
    );

  // An empty result is more likely the undocumented playlist misbehaving
  // than a channel with no videos, so let the fallback have a go.
  if (releases.length === 0) {
    throw new Error("long-form playlist returned no public videos");
  }

  return releases;
}

// Walks the full uploads playlist, newest first, until it has MAX_VIDEOS
// videos that don't look like Shorts.
async function fetchUploadsExcludingShorts(): Promise<YoutubeRelease[]> {
  const releases: YoutubeRelease[] = [];
  let pageToken: string | undefined;

  for (let page = 0; page < MAX_UPLOAD_PAGES && releases.length < MAX_VIDEOS; page++) {
    const playlist = await youtubeGet("playlistItems", {
      part: "contentDetails",
      playlistId: channelPlaylistId("UU"),
      maxResults: "50",
      ...(pageToken && { pageToken }),
    });

    const videoIds = playlist.items.map((item: any) => item.contentDetails.videoId);
    if (videoIds.length === 0) break;

    const details = await youtubeGet("videos", {
      part: "contentDetails,snippet,status",
      id: videoIds.join(","),
    });

    for (const video of details.items) {
      const isPublic = video.status?.privacyStatus === "public";
      const isLongEnough = parseDuration(video.contentDetails.duration) >= MIN_DURATION_SECONDS;
      const isTaggedShort = /#shorts\b/i.test(`${video.snippet.title} ${video.snippet.description}`);

      if (isPublic && isLongEnough && !isTaggedShort) {
        releases.push(toRelease(video.id, video.etag, video.snippet, video.snippet.publishedAt));
      }
    }

    pageToken = playlist.nextPageToken;
    if (!pageToken) break;
  }

  return releases.slice(0, MAX_VIDEOS);
}

async function youtubeGet(resource: string, params: Record<string, string>) {
  const query = new URLSearchParams({ ...params, key: process.env.YOUTUBE_API_KEY ?? "" });
  const response = await fetch(`${API_BASE}/${resource}?${query}`, {
    method: "GET",
    next: { revalidate: 3600 },
  });
  if (!response.ok) {
    // Error bodies aren't always JSON (e.g. an HTML 5xx page).
    const body = await response.json().catch(() => null);
    throw new Error(`${resource} request failed (${response.status}): ${body?.error?.message ?? response.statusText}`);
  }

  return response.json();
}

// Channel IDs start with "UC"; swapping that prefix gives the channel's
// auto-generated playlists ("UU" = all uploads, "UULF" = long-form only).
function channelPlaylistId(prefix: "UU" | "UULF"): string {
  const channelId = process.env.YOUTUBE_CHANNEL_ID ?? "";
  return prefix + channelId.replace(/^UC/, "");
}

function toRelease(videoId: string, etag: string, snippet: any, publishedAt: string): YoutubeRelease {
  return {
    kind: "youtube#video",
    etag,
    id: { kind: "youtube#video", videoId },
    snippet: {
      publishedAt,
      publishTime: publishedAt,
      title: snippet.title,
      description: snippet.description,
    },
  };
}

function parseDuration(duration: string): number {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;

  const hours = parseInt(match[1] || "0");
  const minutes = parseInt(match[2] || "0");
  const seconds = parseInt(match[3] || "0");

  return hours * 3600 + minutes * 60 + seconds;
}
