import Link from "next/link";
import React from "react";

export const NavLink = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link href={link} className="group w-12">
      {text.split("").map((letter, idx) => (
        <span
          key={idx}
          className={`link-animation`}
          style={{ transitionDelay: idx * 75 + "ms" }}
        >
          {letter}
        </span>
      ))}
    </Link>
  );
};
