import Link from "next/link";

export default function Navigation() {
  return (
    <div className="bg-primary p-2 flex gap-8 font-bebas border-b border-black">
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
  );
}
