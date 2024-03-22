import Image from "next/image";
import Button from "./components/Button";
import "./styles.scss";

export default function Home() {
  return (
    <main
      id="home"
      className="flex min-h-screen flex-col justify-between relative overflow-hidden"
    >
      <div
        id="video-container"
        className="absolute w-full top-0 left-0 border-b border-black"
      >
        <video
          src={"/bg.mp4"}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        />
      </div>
      <div className="z-10 flex flex-col gap-12 w-full items-center mt-12">
        <div className="content flex flex-col">
          <h1
            className="flex flex-col text-8xl text-center justify-center \
                       font-bebas text-white h-72"
          >
            MALONE <span className="text-4xl">THE CHEMIST</span>
          </h1>
          <Button label="SEE WHAT I'M UP TO" />
        </div>
        <div className="h-56"></div>
        <div className="content flex flex-col h-96 w-full">
          <div className="px-8">
            <h2 className="font-bebas text-4xl text-white mb-4">
              LISTEN TO ME
            </h2>
            <ol className="flex flex-col gap-2 text-black font-bebas text-2xl">
              <li>SPOTIFY</li>
              <li>APPLE MUSIC</li>
              <li>SOUNDCLOUD</li>
              <li>YOUTUBE</li>
            </ol>
          </div>
        </div>
        <div className="h-56"></div>
        <div className="flex bg-primary w-full justify-center relative">
          <div
            id="image-collage"
            className="justify-center gap-8 p-8 h-full absolute hidden md:flex"
          >
            <div className="flex gap-4 mt-24 mb-36">
              <div>
                <Image
                  className="bg-image bg-image--vert h-full object-cover opacity-50"
                  width={650}
                  height={1200}
                  src="/landing-bg1.jpg"
                  alt="landing background image of malone"
                />
              </div>
              <div className="bg-image flex flex-col gap-4 mt-16">
                <Image
                  className="bg-image--horz__top h-full object-cover opacity-50"
                  width={627}
                  height={640}
                  src="/landing-bg3.jpg"
                  alt="landing background image of malone"
                />
                <Image
                  className="bg-image--horz__bot h-full object-cover opacity-50"
                  width={627}
                  height={550}
                  src="/landing-bg2.jpg"
                  alt="landing background image of malone"
                />
              </div>
            </div>
          </div>
          <div className="content flex flex-col items-center w-full z-10 -mt-56 mb-48">
            <h2
              className="font-bebas text-4xl \
                         text-center text-white"
            >
              WHAT I&apos;M UP TO
            </h2>
            <div className="flex flex-col gap-8 w-full items-center mt-10">
              <div className="bg-secondary video">video embed</div>
              <div className="bg-secondary video">video embed</div>
              <div className="bg-secondary video">video embed</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
