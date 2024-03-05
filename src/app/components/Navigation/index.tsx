import Link from "next/link";

export default function Navigation() {
  return (
    <div
      id="navigation"
      className="bg-primary p-2 font-bebas \
                 border-b border-black"
    >
      <div className="content flex gap-8 ">
        <span>
          <Link href="/">Malone the Chemist</Link>
        </span>
        <div className="flex gap-8">
          <span>
            <Link href="/introduction">Introduction</Link>
          </span>
          <span>
            <Link href="/contact">Contact</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
