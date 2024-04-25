import { SongsQuery } from "@/interfaces/contentful/song";
import { fetchGraphQL } from "@/lib/contentful";
import { SONG_COLLECTION_QUERY } from "@/lib/contentful/queries/song";
import { fetchRecentReleases } from "@/lib/spotify";

import Image from "next/image";
import Link from "next/link";

import { FaApple, FaSpotify } from "react-icons/fa";

export default async function Latest() {
  const latest = (await fetchRecentReleases())[0];
  const { data } = await fetchGraphQL(SONG_COLLECTION_QUERY);
  const { spotify, appleMusic, youtube } = (
    data as SongsQuery
  ).songCollection.items.filter(({ latest }) => latest === true)[0];

  const renderIcons = () => (
    <>
      <Link href={spotify || ""}>
        <FaSpotify size={36} color="black"></FaSpotify>
      </Link>
      <Link href={appleMusic || ""}>
        <FaApple size={36} color="black"></FaApple>
      </Link>
    </>
  );

  return (
    <main
      id="home"
      className={
        "flex min-h-screen flex-col relative overflow-hidden \
        bg-gradient-to-r from-primary to-secondary items-center"
      }
    >
      <div className="content flex flex-col items-center mt-24 mb-8">
        <div className="flex flex-col md:flex-row w-full px-2 mb-8">
          <h1 className="flex flex-col text-8xl text-black font-bebas text-center">
            {latest.name}
          </h1>
          <div className="hidden md:flex flex-row gap-4 ml-auto justify-center">
            {renderIcons()}
          </div>
        </div>
        <Image
          src={latest.images[0].url}
          alt={latest.name}
          height={1000}
          width={1000}
          className="w-3/4"
        ></Image>
      </div>
      <div className="flex flex-row gap-4 justify-center block md:hidden h-32 items-center">
        {renderIcons()}
      </div>
    </main>
  );
}
