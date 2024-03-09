import Image from "next/image";
import Button from "../components/Button";

export default function Introduction() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <div className="content w-full flex space-between mt-36 items-center mb-8">
        <div className="w-72 p-4 mr-auto">
          <h1 className="flex flex-col text-8xl font-bebas">MALONE</h1>
          <h2 className="text-4xl flex flex-col mb-4 font-bebas">
            THE MAN THE MYTH <span>THE CHEMIST</span>
          </h2>
          <p className="font-bebas text-xl">
            Malone, a rising force in the underground rap scene, hails from the
            vibrant streets of Mississauga, where his lyrical prowess and unique
            sound have captivated audiences far and wide.
          </p>
        </div>
        <Image
          src={"/about.png"}
          alt="the chemist pondering"
          width={540}
          height={340}
        />
      </div>
      <div className="content w-full">
        <Button label="SEE WHAT I'M UP TO" />
      </div>
    </main>
  );
}
