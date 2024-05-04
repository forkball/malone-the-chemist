import { SongsQuery } from "@/interfaces/contentful/";
import { fetchGraphQL } from "@/lib/contentful";
import { SONG_COLLECTION_QUERY } from "@/lib/contentful/queries/song";
import Image from "next/image";

export default async function Credits() {
  const { data } = await fetchGraphQL(SONG_COLLECTION_QUERY);
  const { items } = (data as SongsQuery).songCollection;

  return (
    <main className="flex min-h-screen flex-col items-center w-full gap-4 bg-gradient-to-r from-primary to-secondary p-4">
      <div className="content w-full flex flex-col space-between mt-24 items-center mb-8">
        <div className="mr-auto mb-8">
          <h1 className="flex flex-col text-8xl font-bebas">CREDITS</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {items.map((item, index) => (
            <Image
              key={item.title}
              className="h-auto max-w-full rounded-lg w-full opacity-100 md:opacity-50 hover:opacity-100"
              src={item.image?.url}
              alt={item.image?.description}
              width={960}
              height={1280}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
