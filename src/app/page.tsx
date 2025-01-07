import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <Image
          src="/bandpic.jpg"
          alt="DF Logo"
          layout="fill"
          objectFit="cover"
        /> 

        <div className="text-overlay text-white z-10 place-content-center text-center">
          <h1 className="text-9xl font-bold">We are Dangerous Fashion</h1>
        </div>

      </main>
    </div>
  );
}
