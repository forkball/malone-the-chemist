"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

import "./styles.scss";

export default function VideoBackground() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, [setLoading]);

  return (
    <div
      id="video-container"
      className="absolute w-full top-0 left-0 border-b border-black bg-primary"
    >
      {loading && (
        <div className="h-screen w-screen bg-primary fixed z-20 flex items-center justify-center">
          <Image
            src={"/malone-logo-02.png"}
            alt="Loading the Chemist"
            width={40}
            height={20}
          />
        </div>
      )}
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={"/bg.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
