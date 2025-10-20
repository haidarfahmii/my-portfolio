import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="pt-8 lg:pt-12 text-white sticky top-0 z-50 px-5 lg:px-10">
      <div className="max-w-[1400px] container mx-auto flex items-center justify-between bg-[#1c1c22]-800/50 border-2 border-amber-400 rounded-full py-4 px-8 backdrop-blur-sm">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Haidar<span className="text-amber-400">.</span>
          </h1>
        </Link>

        {/* desktop nav & hire me button*/}
        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <button className="bg-amber-600 hover:bg-amber-500 text-slate-800 rounded-md py-1.5 px-3.5 font-bold cursor-pointer  shadow-md hover:shadow-amber-400/80 hover:scale-105 transition-all duration-300 ease-in-out">
              Hire me
            </button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="lg:hidden items-center gap-8">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
