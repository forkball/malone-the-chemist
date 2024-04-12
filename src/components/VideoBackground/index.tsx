import { useEffect } from "react";
import "./styles.scss";

interface Props {
  setLoading: (state: boolean) => void
}

export default function VideoBackground({ setLoading }: Props) {
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);
  return (
    <div
      id="video-container"
      className="absolute w-full top-0 left-0 border-b border-black"
    >
      <video className="w-full h-full object-cover" autoPlay loop muted>
        <source src={"/bg.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
