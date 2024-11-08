import Image from "next/image";
import Link from "next/link";

import { LandingCTA, PhotoBackground, VideoBackground } from "@/components";
import { Divider } from "@/components/common";

import { links } from "@/constants";

import { fetchRecentReleases } from "@/lib/spotify";
import { fetchRecentVideos } from "@/lib/youtube";

import "./styles.scss";

export default async function Home() {
  const albums = await fetchRecentReleases();
  const youtubeReleases = (await fetchRecentVideos()).filter((video) =>
    video.id.kind.includes("video")
  );

  const renderPhotoBg = () => {
    const num = Math.max(0, Math.ceil(youtubeReleases?.length / 3));

    const result = [];

    for (var i = 0; i < num; i++) {
      result.push(<PhotoBackground key={`bg-image-${i}`} className={"mt-8"} />);
    }

    return result;
  };

  const renderLanding = () => (
    <div className="content flex flex-col">
      <h1
        className="flex flex-col text-8xl text-center justify-center \
               font-bebas text-white h-72"
      >
        <Image
          src={"/malone-logo-01.png"}
          alt="Malone"
          width={480}
          height={140}
        />
        <span className="text-4xl">THE CHEMIST</span>
      </h1>
      <LandingCTA ctaId="what-im-up-to" />
    </div>
  );

  const renderPlatforms = () => (
    <div className="flex flex-col h-48 md:h-96 w-96 shrink-0 px-12 lg:px-0 justify-center">
      <h2 className="font-bebas text-4xl text-white mb-4">LISTEN TO ME</h2>
      <ol className="flex flex-col gap-2 text-white font-bebas text-2xl">
        <li className="hover:underline">
          <a href={links.spotify} target="_blank">
            SPOTIFY
          </a>
        </li>
        <li className="hover:underline">
          <a href={links.apple_music} target="_blank">
            APPLE MUSIC
          </a>
        </li>
        <li className="hover:underline">
          <a href={links.soundcloud} target="_blank">
            SOUNDCLOUD
          </a>
        </li>
        <li className="hover:underline">
          <a href={links.youtube} target="_blank">
            YOUTUBE
          </a>
        </li>
      </ol>
    </div>
  );

  const renderRecentAlbums = () => (
    <div className="w-full flex flex-col">
      <div
        id="album-view"
        className="w-full flex flex-row gap-4 overflow-x-scroll md:overflow-x-visible pb-2"
      >
        {albums.map((album) => (
          <div
            key={album.id}
            className="album w-48 h-48 grow-0 shrink-0"
          >
            <Link
              href={`https://open.spotify.com/album/${album.id}`}
              target="_blank"
            >
              <Image
                alt={album.name}
                src={album.images[0].url}
                width={250}
                height={250}
                className="w-full h-full opacity:100 md:opacity-50 hover:opacity-100"
              ></Image>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

  const renderVideoFeed = () => (
    <div className="flex bg-gradient-to-r from-primary to-secondary w-full justify-center relative">
      <div className="flex flex-col absolute">{renderPhotoBg()}</div>
      <div
        id="what-im-up-to"
        className="content flex flex-col items-center w-full z-10 -mt-56 mb-0 md:mb-12 pt-24"
      >
        <h2
          className="font-bebas text-4xl \
                 text-center text-white"
        >
          WHAT I&apos;M UP TO
        </h2>
        <div className="flex flex-col gap-8 w-full items-center mt-10">
          {youtubeReleases?.map(({ id }) => (
            <iframe
              key={id.videoId}
              width={720}
              height={420}
              src={`https://www.youtube.com/embed/${id.videoId}`}
              className="md:w-3/4 w-full"
            ></iframe>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main
      id="home"
      className={
        "flex min-h-screen flex-col justify-between relative overflow-hidden"
      }
    >
      <VideoBackground />
      <div className={`z-10 flex flex-col gap-12 w-full items-center mt-6`}>
        {renderLanding()}
        <Divider height={"h-56"} />
        <div className="content flex flex-col md:flex-row md:items-center w-full gap-12 md:gap-0 py-4 bg-opacity-50 md:bg-opacity-0">
          {renderPlatforms()}
          {renderRecentAlbums()}
        </div>
        <Divider />
        {renderVideoFeed()}
      </div>
    </main>
  );
}
