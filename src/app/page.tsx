import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full overflow-hidden relative flex justify-center items-center">

      <Image
        src={"/mountBg.jpg"}
        alt={"bg"}
        fill
        className="-z-10 brightness-[0.4]"
      />
      <div className="flex flex-col items-center gap-y-12 select-none">
        <div className="text-white font-semibold text-3xl uppercase">
          Create your quiz and share it to Everyone
        </div>
        <Link
          href={"#"}
          className="text-white font-semibold text-xl border border-white/50 px-8 py-2 rounded bg-black/50 relative group overflow-hidden"
        >
          <span className="ease absolute left-0 top-0 h-0 w-0 border-t border-white transition-all duration-500 rounded group-hover:w-full"></span>
          <span className="ease absolute right-0 top-0 h-0 w-0 border-r border-white transition-all duration-500 rounded group-hover:h-full"></span>
          <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b border-white transition-all duration-500 rounded group-hover:w-full"></span>
          <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l border-white transition-all duration-500 rounded group-hover:h-full"></span>

          <span className="group-hover:animate-pulse">Start Now</span>
        </Link>
      </div>
    </div>
  );
}
