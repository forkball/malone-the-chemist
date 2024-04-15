"use client";

import Button from "../common/Button";

interface Props {
    ctaId: string;
}

export default function LandingCTA({ctaId} : Props) {
  const handleLandingCta = () => {
    document?.getElementById(ctaId)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  return (
    <div className="flex justify-center">
      <Button label="SEE WHAT I'M UP TO" onClick={handleLandingCta} />
    </div>
  );
}
