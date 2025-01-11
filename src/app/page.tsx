import Image from "next/image";
import Music from "./components/music";

export default function Home() {
  return (
    /* TODO: evaluate grid approach */
    <div className="justify-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full max-w-4xl mx-auto flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          src="/bandpic.jpg"
          alt="DF Logo"
          width={6000}
          height={4000}
          objectFit="cover"
          layout="responsive"
        />

        <Music />
      </main>
    </div>
  );
}
