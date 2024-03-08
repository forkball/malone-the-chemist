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
      </div>
      <div className="z-10 flex flex-col gap-12 w-full items-center mt-12">
        <div className="content">
          <h1
            className="flex flex-col text-8xl text-center justify-center \
                       font-bebas text-white h-72"
          >
            MALONE <span className="text-4xl">THE CHEMIST</span>
          </h1>
        </div>
        <div className="content flex h-96 w-full">
          <div className="flex flex-col gap-2 mr-auto ml-4">
          <h2 className="font-bebas text-4xl text-white">LISTEN TO ME</h2>
          <ol className="flex flex-col gap-2 text-black font-bold">
            <li>SPOTIFY</li>
            <li>APPLE MUSIC</li>
            <li>SOUNDCLOUD</li>
            <li>YOUTUBE</li>
          </ol>
        </div></div>
        <div className="flex bg-black w-full justify-center relative">
          <div
            id="image-collage"
            className="flex justify-center gap-8 p-8 h-full absolute"
          >
            <div className="flex gap-8 mt-48">
              <div className="bg-image bg-image--vert h-full bg-primary" />
              <div className="bg-image flex flex-col gap-8">
                <div className="bg-image--horz__top bg-primary" />
                <div className="bg-image--horz__bot bg-primary" />
              </div>
            </div>
          </div>
          <div className="content flex flex-col items-center w-full z-10 -mt-16">
            <h2
              className="font-bebas text-4xl mb-12 \
                         text-center text-white"
            >
              WHAT I&apos;M UP TO
            </h2>
            <div className="flex flex-col gap-4 w-full items-center my-10">
              <div className="bg-secondary video" />
              <div className="bg-secondary video" />
              <div className="bg-secondary video" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
