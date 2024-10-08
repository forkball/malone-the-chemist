import { ContentFetch } from "@/interfaces/contentful";

export async function fetchGraphQL(query: string): Promise<ContentFetch> {
  try {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
        next: { revalidate: 3600 },
      }
    );
    return await response.json();
  } catch (e) {
    throw e;
  }
}
