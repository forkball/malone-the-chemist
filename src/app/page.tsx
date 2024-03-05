import "./styles.scss";

export default function Home() {
  return (
    <main
      id="home"
      className="flex min-h-screen flex-col justify-between relative"
    >
      <div id="video-container" className="absolute w-full top-0 left-0">
        <video
          src={"/bg.mp4"}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        />
        <div
          id="image-collage"
          className="bg-black flex justify-center gap-8 p-8"
        >
          <div className="flex gap-8 p-8 mt-12">
            <div className="bg-image bg-image--vert h-full bg-primary" />
            <div className="bg-image flex flex-col gap-8">
              <div className="bg-image--horz h-1/2 bg-primary" />
              <div className="bg-image--horz h-1/2 bg-primary" />
            </div>
          </div>
        </div>
      </div>
      <div className="z-10 flex flex-col gap-12 w-full items-center">
        <div className="flex flex-col w-full content">
          <h1
            className="flex flex-col text-8xl text-center justify-center \
                       font-bebas text-white h-72"
          >
            MALONE <span className="text-4xl">THE CHEMIST</span>
          </h1>
          <div className="flex flex-col gap-2 text-white h-96 p-4 flex-start">
            <h2 className="font-bebas text-4xl">LISTEN TO ME</h2>
            <ol className="flex flex-col gap-2">
              <li>SPOTIFY</li>
              <li>APPLE MUSIC</li>
              <li>SOUNDCLOUD</li>
              <li>YOUTUBE</li>
            </ol>
          </div>
          <div className="text-center text-white">
            <h2 className="font-bebas text-4xl">WHAT I&apos;M UP TO</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
