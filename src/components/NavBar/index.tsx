import Image from "next/image";
import React from "react";
import { NavLink } from "../NavLink";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="w-full fixed top-0 z-50 flex justify-between items-center bg-black px-8 py-4">
      <Link href={"/"}>
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />
      </Link>
      <div className="flex items-center justify-center text-white w-full h-8">
        <NavLink link="/about" text="About" />
        <NavLink link="/contact" text="Contact" />
      </div>
      <div>
        <Link
          href={"/login"}
          className="w-24 h-8 flex justify-center items-center bg-transparent border border-white rounded text-white font-medium text-sm hover:bg-white hover:text-black transition-all duration-300"
        >
          LOGIN
        </Link>
      </div>
    </nav>
  );
};
