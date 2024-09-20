import { PencilIcon } from "@heroicons/react/16/solid";
import { WrenchIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="h-screen w-full overflow-hidden flex flex-col items-center justify-center gap-12 px-8">
      <div className="text-3xl font-semibold flex items-center gap-x-4 whitespace-nowrap">
        <p>How It Works?</p>
        <WrenchIcon className="w-8 rotate-90 animate-spin-back-and-forth" />
      </div>
      <div className="flex items-center justify-between gap-x-8 w-1/2 select-none">
        <div className="text-xl font-medium">1- Login with google</div>
        <div className="flex gap-x-1 items-center border relative overflow-hidden border-black pr-8 pl-1 py-1 rounded -rotate-12 group">
          <Image
            src={"/google.svg"}
            alt={"google logo"}
            width={35}
            height={35}
            className="filter rotate-0 group-hover:-rotate-[360deg] grayscale-0 group-hover:grayscale transition-all duration-500"
          />
          <div className="group-hover:text-white font-semibold transition-colors duration-300">
            Login with Google
          </div>
          <div className="w-[25.5%] h-[200%] [clip-path:circle(75%_at_70%_90%)] absolute -bottom-[152%] group-hover:bottom-0 left-0 bg-[#DB4437] transition-all duration-300 -z-10"></div>
          <div className="w-[25.5%] h-[200%] [clip-path:circle(75%_at_70%_90%)] absolute -bottom-[152%] group-hover:bottom-0 left-1/4 bg-[#F4B400] transition-all duration-300 delay-[0.05s] -z-10"></div>
          <div className="w-[25.5%] h-[200%] [clip-path:circle(75%_at_70%_90%)] absolute -bottom-[152%] group-hover:bottom-0 left-1/2 bg-[#0F9D58] transition-all duration-300 delay-[0.1s] -z-10"></div>
          <div className="w-[25.5%] h-[200%] [clip-path:circle(75%_at_70%_90%)] absolute -bottom-[152%] group-hover:bottom-0 left-3/4 bg-[#4285F4] transition-all duration-300 delay-[0.15s] -z-10"></div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-x-8 w-1/2 select-none">
        <div className="w-14 border-2 rounded py-2 px-1 overflow-hidden border-black flex flex-col gap-y-2 relative group">
          <div className="absolute top-1 left-0 w-6 h-6 pen-animation">
            <div className="relative">
              <PencilIcon className="w-6 absolute rotate-90 z-20" />
              <PencilIcon className="w-6 absolute rotate-[120deg] z-10 -left-1 top-1 fill-gray-800/50 blur-[2px]" />
            </div>
          </div>
          <div className="w-3/4 h-0.5 bg-black"></div>
          <div className="w-full px-1 gap-x-1 flex items-center h-fit">
            <div className="w-[4px] rounded-full aspect-square bg-black"></div>
            <div className="flex-1 h-0.5 bg-black"></div>
          </div>
          <div className="w-full px-1 gap-x-1 flex items-center h-fit">
            <div className="w-[4px] rounded-full aspect-square bg-black"></div>
            <div className="flex-1 h-0.5 bg-black"></div>
          </div>
          <div className="w-full px-1 gap-x-1 flex items-center h-fit">
            <div className="w-[4px] rounded-full aspect-square bg-black"></div>
            <div className="flex-1 h-0.5 bg-black"></div>
          </div>
          <div className="w-full px-1 gap-x-1 flex items-center h-fit">
            <div className="w-[4px] rounded-full aspect-square bg-black"></div>
            <div className="flex-1 h-0.5 bg-black"></div>
          </div>
        </div>
        <div className="text-xl font-medium">2- Create your quiz</div>
      </div>
      <div className="flex items-center justify-between gap-x-8 w-1/2 select-none">
        <div className="text-xl font-medium">3- Send Links</div>
      </div>
      <div className="flex items-center justify-between gap-x-8 w-1/2 select-none">
        <div></div>
        <div className="text-xl font-medium">4- Watch results</div>
      </div>
    </div>
  );
};

export default About;
