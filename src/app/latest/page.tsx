import { SongsQuery } from "@/interfaces/contentful/";
import { fetchGraphQL } from "@/lib/contentful";
import { SONG_COLLECTION_QUERY } from "@/lib/contentful/queries/song";

import Image from "next/image";
import Link from "next/link";

import {
  FaApple,
  FaSpotify,
  FaYoutube,
  FaAmazon,
  FaSoundcloud,
} from "react-icons/fa";
import { SiTidal } from "react-icons/si";

export default async function Latest() {
  const { data } = await fetchGraphQL(SONG_COLLECTION_QUERY);
  const {
    title,
    albumArt,
    spotify,
    appleMusic,
    youtube,
    soundcloud,
    amazonMusic,
    tidal,
    mediaLinks,
  } = (data as SongsQuery).songCollection.items.filter(
    ({ latest }) => latest === true
  )[0];

  const renderIcons = () => (
    <>
      {spotify && (
        <Link href={spotify}>
          <FaSpotify size={36} color="#151616"></FaSpotify>
        </Link>
      )}

      {appleMusic && (
        <Link href={appleMusic}>
          <FaApple size={36} color="#151616"></FaApple>
        </Link>
      )}

      {youtube && (
        <Link href={youtube}>
          <FaYoutube size={36} color="#151616"></FaYoutube>
        </Link>
      )}

      {amazonMusic && (
        <Link href={amazonMusic}>
          <FaAmazon size={36} color="#151616"></FaAmazon>
        </Link>
      )}

      {soundcloud && (
        <Link href={soundcloud}>
          <FaSoundcloud size={36} color="#151616"></FaSoundcloud>
        </Link>
      )}

      {tidal && (
        <Link href={tidal}>
          <SiTidal size={36} color="#151616"></SiTidal>
        </Link>
      )}
    </>
  );

  return (
    <main
      id="home"
      className={
        "flex min-h-screen flex-col relative overflow-hidden \
        bg-gradient-to-r from-primary to-secondary items-center \
        px-12 lg:px-0"
      }
    >
      <div className="content flex flex-col items-center mt-20 w-full">
        <div className="flex flex-col w-full mb-8 gap-2 justify-center items-center">
          <h1 className="text-8xl text-black font-bebas text-center">
            {title}
          </h1>
          <div className="hidden md:flex gap-4 justify-center">{renderIcons()}</div>
        </div>
        <Image
          src={albumArt.url}
          alt={albumArt.description}
          height={1000}
          width={1000}
          className="w-3/4"
        ></Image>
      </div>
      <div className="flex flex-row gap-4 justify-center block md:hidden h-32 md:h-56 pt-10">
        {renderIcons()}
      </div>
      {mediaLinks && (
        <div className="pt-12 content flex flex-col w-full items-center">
          <h2 className="text-6xl text-black font-bebas text-center md:text-left mb-8">
            MEDIA
          </h2>
          <div className="flex flex-col gap-4 w-full items-center">
            {mediaLinks.map((link) => (
              <iframe
                key={link}
                width={720}
                height={420}
                src={link}
                className="md:w-3/4"
              ></iframe>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
