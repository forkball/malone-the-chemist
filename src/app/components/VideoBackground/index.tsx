import { list } from "@vercel/blob";

export default async function VideoBackground() {
  // const { blobs } = await list({
  //   prefix: "bg",
  //   limit: 1,
  // });
  // const { url } = blobs[0];
  // console.log(url)
  return (
    <div
      id="video-container"
      className="absolute w-full top-0 left-0 border-b border-black"
    >
      <video className="w-full h-full object-cover" autoPlay loop muted>
        <source src={'./bg.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
