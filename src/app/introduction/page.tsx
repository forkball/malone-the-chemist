import Image from "next/image";

export default function Introduction() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full bg-primary">
      <div
        className="content w-full flex flex-col md:flex-row space-between items-center \
                   mt-24 px-4 pb-12 gap-12"
      >
        <div className="w-full md:w-60 md:mr-auto text-left">
          <h1 className="flex flex-col text-8xl font-bebas">MALONE</h1>
          <h2 className="text-4xl flex flex-col mb-4 font-bebas">
            THE MAN THE MYTH <span>THE CHEMIST</span>
          </h2>
          <p className="text-xl font-bebas">
            Malone, a rising force in the underground rap scene, hails from the
            vibrant streets of Mississauga, where his lyrical prowess and unique
            sound have captivated audiences far and wide.
          </p>
        </div>
        <Image
          src={"/about.png"}
          alt="the chemist pondering"
          width={540}
          height={340}
          className="w-full md:w-3/5 opacity-75 rounded"
        />
      </div>
      <div className="border-b border-black w-full"></div>
      <div className="content flex flex-col h-96 w-full px-4 pt-12">
        <h2 className="font-bebas text-4xl text-white mb-4">LISTEN TO ME</h2>
        <ol className="flex flex-col gap-2 text-black font-bebas text-2xl">
          <li>SPOTIFY</li>
          <li>APPLE MUSIC</li>
          <li>SOUNDCLOUD</li>
          <li>YOUTUBE</li>
        </ol>
      </div>
    </main>
  );
}
