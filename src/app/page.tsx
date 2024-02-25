export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <h1 className="flex flex-col text-4xl text-center font-bebas">
        MALONE <span className="text-2xl">THE CHEMIST</span>
      </h1>
      <div className="flex flex-col flex-start gap-2">
        <h2 className="font-bebas text-2xl">LISTEN TO ME</h2>
        <ol className="flex flex-col gap-2">
          <li>SPOTIFY</li>
          <li>APPLE MUSIC</li>
          <li>SOUNDCLOUD</li>
          <li>YOUTUBE</li>
        </ol>
      </div>
      <div className="text-center">
        <h2 className="font-bebas text-2xl">WHAT I&apos;M UP TO</h2>
      </div>
    </main>
  );
}
