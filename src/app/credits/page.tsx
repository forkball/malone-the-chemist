import { fetchGraphQL } from "@/lib/contentful/fetch";
import { SONG_COLLECTION_QUERY } from "@/lib/contentful/queries/song";

export default async function Credits() {
  const { data } = await fetchGraphQL(SONG_COLLECTION_QUERY);
  const { items } = (data as SongCollection).songCollection;
  
  return (
    <main className="flex min-h-screen flex-col items-center w-full gap-4 bg-primary p-4">
      <div className="content w-full flex flex-col space-between mt-24 items-center mb-8">
        <div className="mr-auto">
          <h1 className="flex flex-col text-8xl font-bebas">CREDITS</h1>
        </div>
        <div className="flex flex-col justify-start w-full">
          {items.map((item, index) => (
            <div
              key={item.sys.id}
              className={`border-t border-black w-full py-4 ${
                index === data.songCollection.items.length - 1 && "border-b"
              }`}
            >
              <h2>{item.title}</h2>
              <p>Malone the Chemist</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
