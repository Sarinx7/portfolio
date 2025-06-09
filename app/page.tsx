import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav className="flex items-center justify-between w-full py-4 bg-black ">
            <div className="flex items-center">
                <h1 className=" text-2xl font-bold px-4 bg-gradient-to-r from-white via-gray-500 to-white text-transparent bg-clip-text hover:text-gray-500 transition-colors cursor-pointer">Portfolio</h1>
            </div>
            <div className="flex items-center gap-6 px-4">
                <Link href="/" className="text-white">Home</Link>
                <Link href="/about" className="text-white">About</Link>
                <Link href="/projects" className="text-white">Projects</Link>
                <Link href="/contact" className="text-white">Contact</Link>
            </div>
        </nav>
        <div className="h-10 bg-neutral-100"></div>
        <div className="bg-neutral-100">
        <div className="flex flex-col items-center justify-center">
          <div className="w-52 h-52 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
            <img src="/avatar.png" alt="Avatar" />
          </div>
          <h1 className="text-5xl font-bold px-4 mt-4 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-transparent bg-clip-text ">Sarin M S</h1>
          <p className="text-gray-500 text-center mt-2 text-xl">Front End Developer passionate about creating beautiful <br />and functional web experiences.</p> 
        </div>
        </div>
    </main>
  );
}
