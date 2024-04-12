"use client";

import ListeningLinks from "@/components/ListeningLinks";
import VideoBackground from "@/components/VideoBackground";
import Button from "@/components/common/Button";

import "./styles.scss";
import PhotoBackground from "@/components/PhotoBackground";
import { useCallback, useState } from "react";
import { Navigation } from "@/components";

export default function Home() {
  const [loading, setLoading] = useState(true);

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

  return (
    <main
      id="home"
      className={
        "flex min-h-screen flex-col justify-between relative overflow-hidden"
      }
    >
      <VideoBackground setLoading={setLoading} />
      {loading && (
        <div className="h-screen w-screen bg-primary fixed z-20"></div>
      )}
      <div
        className={`z-10 flex flex-col gap-12 w-full items-center mt-12 ${
          loading && "hidden"
        }`}
      >
        <div className="content flex flex-col">
          <h1
            className="flex flex-col text-8xl text-center justify-center \
                       font-bebas text-white h-72"
          >
            MALONE <span className="text-4xl">THE CHEMIST</span>
          </h1>
          <Button label="SEE WHAT I'M UP TO" onClick={() => {}} />
        </div>
        <div className="h-56"></div>
        <ListeningLinks />
        <div className="h-56"></div>
        <div className="flex bg-primary w-full justify-center relative">
          <div className="flex flex-col absolute">{renderPhotoBg()}</div>
          <div
            id="what-im-up-to"
            className="content flex flex-col items-center w-full z-10 -mt-56 mb-48"
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
      </div>
    </main>
  );
}
