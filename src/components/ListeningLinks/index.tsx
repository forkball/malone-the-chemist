import { links } from "@/constants";

export default function ListeningLinks() {
  return (
    <div className="content flex flex-col h-96 w-full px-4 lg:px-0 pt-12">
      <h2 className="font-bebas text-4xl text-white mb-4">LISTEN TO ME</h2>
      <ol className="flex flex-col gap-2 text-black font-bebas text-2xl">
        <li>
          <a href={links.spotify} target="_blank">
            SPOTIFY
          </a>
        </li>
        <li>
          <a href={links.apple_music} target="_blank">
            APPLE MUSIC
          </a>
        </li>
        <li>
          <a href={links.soundcloud} target="_blank">
            SOUNDCLOUD
          </a>
        </li>
        <li>
          <a href={links.youtube} target="_blank">
            YOUTUBE
          </a>
        </li>
      </ol>
    </div>
  );
}
