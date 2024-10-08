import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { LayoutProvider } from "./customLayout";

export const metadata: Metadata = {
  title: "QUIZ ME",
  description: "Created by m1her",
};

const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
