"use client";

import { useEffect, useState } from "react";

interface Props {
  scrollViewId: string;
}

export default function ScrollControl({
  scrollViewId,
}: Props) {
  const [scrollView, setScrollView] = useState<HTMLElement | null>();

  const scroll = (direction: -1 | 1) => {
    scrollView?.scrollBy({
        left: 200 * direction,
        behavior: 'smooth'
      });
  };

  useEffect(() => {
    const view = document.getElementById(scrollViewId);
    setScrollView(view);
  }, [scrollViewId]);

  return (
    <div className="flex flex-row font-md font-bold items-start gap-1">
      <button
        type="button"
        onClick={() => {
          scroll(-1);
        }}
      >
        <i>left</i>
      </button>
      <button
        type="button"
        onClick={() => {
          scroll(1);
        }}
      >
        <i>right</i>
      </button>
    </div>
  );
}
