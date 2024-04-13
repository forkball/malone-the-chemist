import Image from "next/image";

import "./styles.scss";

interface Props {
  className?: string;
}

export default function PhotoBackground({ className }: Props) {
  return (
    <div
      id="image-collage"
      className={`justify-center gap-8 px-8 h-full hidden md:flex ${className}`}
    >
      <div className="flex gap-8">
        <div>
          <Image
            className="bg-image bg-image--vert h-full object-cover opacity-50"
            width={650}
            height={1200}
            src="/landing-bg1.jpg"
            alt="landing background image of malone"
          />
        </div>
        <div className="bg-image flex flex-col gap-8">
          <Image
            className="bg-image--horz__top h-full object-cover opacity-50 object-right"
            width={627}
            height={640}
            src="/landing-bg3.jpg"
            alt="landing background image of malone"
          />
          <Image
            className="bg-image--horz__bot h-full object-cover opacity-50 object-left"
            width={627}
            height={640}
            src="/landing-bg2.jpg"
            alt="landing background image of malone"
          />
        </div>
      </div>
    </div>
  );
}
