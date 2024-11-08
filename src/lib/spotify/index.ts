import { Tokens, Album } from "@/interfaces/spotify";

async function generateTokens(): Promise<Tokens> {
  try {
    const response = await fetch(`https://accounts.spotify.com/api/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(
          process.env.SPOTIFY_CLIENT_ID +
            ":" +
            process.env.SPOTIFY_CLIENT_SECRET
        )}`,
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
      }),
      next: { revalidate: 3600 },
    });
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function fetchRecentReleases(): Promise<Album[]> {
  const { access_token } = await generateTokens();
  const response = await fetch(
    `https://api.spotify.com/v1/artists/${process.env.SPOTIFY_ARTIST_ID}/albums?include_groups=single,album`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
  
  return (await response.json()).items;
}
