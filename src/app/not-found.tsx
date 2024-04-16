import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="home"
      className={
        "flex min-h-screen flex-col items-center overflow-hidden bg-primary"
      }
    >
      <div
        className={`content flex flex-col gap-12 w-full items-center mt-24 font-bebas`}
      >
        <h1 className="flex flex-col text-8xl font-bebas">NOT FOUND</h1>
        <Link href="/">
          <Image
            src={"/malone-logo-02.png"}
            alt="Malone"
            height={20}
            width={40}
          ></Image>
        </Link>
      </div>
    </main>
  );
}
