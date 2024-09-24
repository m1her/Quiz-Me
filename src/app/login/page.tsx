import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="w-full px-8 py-12 gap-8 h-screen overflow-hidden bg-black grid grid-cols-2 place-items-center relative">
      <Image
        src={"/loginbg.jpg"}
        alt="bg"
        fill
        className="z-10 brightness-[0.25] object-cover object-bottom"
      />
      <div className="w-2/3  flex flex-col gap-y-4 items-center py-6 px-8 shadow-[inset_0_0_12px_6px_rgba(100,100,100,0.3)] border border-black/50 rounded bg-neutral-800/90 z-20">
        <div className="text-white font-bold text-2xl uppercase gap-4">
          Login
        </div>
        <div className="w-full flex-1 items-center flex flex-col gap-y-4">
          <button className="google-parent w-full flex gap-x-2 items-center border border-black rounded px-2 py-1.5 google-gradient-bg relative group">
            <Image
              src={"/google.svg"}
              alt={"google logo"}
              width={35}
              height={35}
              className="brightness-0"
            />
            <div className="font-bold text-black">Login with Google</div>
            <div className="google-gradient-bg opacity-0 group-hover:opacity-45 transition-all duration-300 w-[104%] h-[130%] rounded blur -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </button>
        </div>
      </div>
      <div className="text-[84px] font-bold text-white z-20 uppercase leading-[88px]">
        welcome to quizme
      </div>
    </div>
  );
};

export default Login;
