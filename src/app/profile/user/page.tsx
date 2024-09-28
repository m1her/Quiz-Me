import { ProfileCard } from "@/components/ProfileCard";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative p-8 pt-20">
      <Image
        src={"/profile.png"}
        alt="bg"
        fill
        className="object-cover object-center brightness-75 -z-10"
      />
      <div className="grid grid-cols-3 gap-8">
        <ProfileCard>
          <div className="text-black flex flex-col items-center gap-8">
            <div className="w-32 aspect-square rounded-full border-2 border-zinc-100/50 bg-zinc-800"></div>
            <div className="capitalize font-semibold text-2xl">
              maher nassrallah
            </div>
          </div>
        </ProfileCard>
        <div className="col-span-2 row-span-2">
          <ProfileCard>
            <div>asd</div>
          </ProfileCard>
        </div>
        <ProfileCard>
          <div className="text-black flex flex-col items-start gap-2">
            <div className="font-semibold text-xl">maher.ple2@gmail.com</div>
            <div className="capitalize font-semibold text-xl">math teacher</div>
            <div className="capitalize font-semibold text-xl">
              Al Azhar University
            </div>
            <div className="capitalize font-semibold text-xl">Loaction</div>
            <div className="capitalize font-semibold text-xl">
              Number Of Quizzes
            </div>
            <div className="capitalize font-semibold text-xl">About</div>
          </div>
        </ProfileCard>
      </div>
    </div>
  );
};

export default page;
