"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const NavLink = ({ text, link }: { text: string; link: string }) => {
  const pathname = usePathname();
  console.log(pathname == link);

  return (
    <Link href={link} className="group relative w-24 h-8">
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit ${
          pathname == link ? "font-extrabold" : "font-normal"
        }`}
      >
        {text.split("").map((letter, idx) => (
          <span
            key={idx}
            className={`link-animation`}
            style={{
              transitionDelay: idx * 75 + "ms",
            }}
          >
            {letter}
          </span>
        ))}
        <div
          className={`absolute -bottom-1 right-0 group-hover:right-full origin-left group-hover:origin-right scale-x-100 group-hover:scale-x-[-1] h-[2px] bg-white ${
            pathname == link ? "w-full" : "w-0"
          } group-hover:w-full transition-[width]`}
          style={{
            transitionDuration: text.length * 90 + "ms",
          }}
        ></div>
      </div>
    </Link>
  );
};
