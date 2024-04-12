import Link from "next/link";

export default function Navigation() {
  return (
    <div
      id="navigation"
      className="bg-primary p-2 px-4 font-bebas \
                 border-b border-black w-full \
                 flex justify-center fixed z-20"
    >
      <div className="content flex gap-8 w-full">
        <span>
          <Link href="/">Malone the Chemist</Link>
        </span>
      </div>
    </div>
  );
}
