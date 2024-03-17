import Button from "../components/Button";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <div className="content w-full flex space-between mt-36 items-center mb-8">
        <div className="p-4 mr-auto">
          <h1 className="flex flex-col text-8xl font-bebas">LET&apos;S GET TOGETHER</h1>
          <h2 className="text-4xl flex flex-col mb-4 font-bebas">
            I&apos;M ALWAYS INTERESTED IN WORKING WITH OTHER ARTISTS
          </h2>
        </div>
      </div>
      <div className="content w-full">
        <Button label="SEE WHAT I'M UP TO" />
      </div>
    </main>
  );
}
