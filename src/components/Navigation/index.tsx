import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <div
      id="navigation"
      className="bg-primary p-2 px-4 font-bebas \
                 border-b border-black w-full \
                 flex justify-center fixed z-20 \
                 bg-gradient-to-r from-primary to-secondary"
    >
      <div className="content flex gap-8 w-full">
        <span>
          <Link href="/">
            <Image src={"/malone-logo-02.png"} alt="Malone" height={20} width={40} />
          </Link>
        </span>
      </div>
    </div>
  );
}
