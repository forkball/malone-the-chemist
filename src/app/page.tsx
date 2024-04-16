import Image from "next/image";
import { useCallback, useState } from "react";

import ListeningLinks from "@/components/ListeningLinks";
import VideoBackground from "@/components/VideoBackground";
import PhotoBackground from "@/components/PhotoBackground";
import LandingCTA from "@/components/LandingCTA";
import Divider from "@/components/common/Divider";

import "./styles.scss";

export default function Home() {
  const videos = [
    "video",
    "video",
    "video",
    "video",
    "image",
    "video",
    "video",
  ];

  const renderPhotoBg = useCallback(() => {
    const num = Math.ceil(videos.length / 3);

    const result = [];

    for (var i = 0; i < num; i++) {
      result.push(<PhotoBackground className={"mt-8"} />);
    }

    return result;
  }, [videos]);

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
          {videos.map((alt) => (
            <div key={alt} className="border video">
              {alt}
            </div>
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
      <div className={`z-10 flex flex-col gap-12 w-full items-center mt-12 `}>
        {renderLanding()}
        <Divider />
        <ListeningLinks />
        <Divider />
        {renderVideoFeed()}
      </div>
    </main>
  );
}
