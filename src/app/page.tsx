import { NavLink } from "@/components/NavLink";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <nav className="w-full flex justify-between items-center bg-[#0056b3] px-8 py-4">
      <Image src="/logo.svg" alt="Logo" width={120} height={100} />
      <div className="flex items-center gap-x-8 text-white">
        <NavLink link="#" text="About" />
        <NavLink link="#" text="Contact" />
      </div>
      <div>
        <Link
          href={"#"}
          className="w-24 h-8 flex justify-center items-center bg-transparent border border-[#FFD700] rounded text-[#FFD700] font-semibold hover:bg-[#FFD700] hover:text-[#0056b3] transition-all duration-300"
        >
          CREATE
        </Link>
      </div>
    </nav>
  );
}
