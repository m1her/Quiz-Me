import Image from "next/image";
import React from "react";
import { NavLink } from "../NavLink";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="w-full fixed top-0 flex justify-between items-center bg-black px-8 py-4">
      <Image src="/logo.svg" alt="Logo" width={100} height={100} />
      <div className="flex items-center gap-x-8 text-white">
        <NavLink link="#" text="About" />
        <NavLink link="#" text="Contact" />
      </div>
      <div>
        <Link
          href={"#"}
          className="w-24 h-8 flex justify-center items-center bg-transparent border border-white rounded text-white font-medium text-sm hover:bg-white hover:text-black transition-all duration-300"
        >
          CREATE
        </Link>
      </div>
    </nav>
  );
};
