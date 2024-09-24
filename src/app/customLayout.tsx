"use client";

import { NavBar } from "@/components/NavBar";
import { usePathname } from "next/navigation";

export const LayoutProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/login" && <NavBar />}
      {children}
    </>
  );
};
