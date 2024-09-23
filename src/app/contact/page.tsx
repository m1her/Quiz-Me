import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="pt-16">
      <div className="flex items-center px-8 py-28 relative">
        <Image
          src={"/contact-bg.jpg"}
          alt="Img"
          fill
          className="filter brightness-[0.2] -z-10 object-cover object-center"
        />
        <div className="bg-gradient-to-r from-black to-transparent absolute top-0 left-0 w-full h-full -z-10"></div>
        <div className="flex flex-col gap-y-8 ml-[20%]">
          <div className="text-white font-semibold text-5xl">Contact Us</div>
          <div className="text-white">
            If you have any issue or questions, don&lsquo;t hold back to reach
            us.
          </div>
        </div>
        <div>asd</div>
      </div>
      <div className="flex flex-col items-center gap-y-8 px-8 py-12 bg-zinc-100">
        <div className="text-3xl font-bold">Reach Us</div>
        <div className="w-16 h-0.5 bg-zinc-800"></div>
        <div className="text-center w-1/3 font-semibold text-black/80">
          You can use one of the following to get in touch with us, and we will
          reply at the nearest time
        </div>
        <div className="flex items-center justify-center gap-x-8 w-full">
          <div className="grid grid-cols-3 w-2/3 gap-16">
            <div className="p-2 flex flex-col justify-center gap-y-4 items-center bg-white rounded shadow w-full aspect-square">
              <MapPinIcon className="w-10 h-10 text-amber-500" />
              <div className="text-lg font-semibold">Location</div>
              <div>AL-Naser St, Cairo, EGYPT</div>
            </div>
            <div className="p-2 flex flex-col justify-center gap-y-4 items-center bg-white rounded shadow w-full aspect-square">
              <PhoneIcon className="w-10 h-10 text-amber-500" />
              <div className="text-lg font-semibold">Call US</div>
              <div>+(12) 345 678 9999</div>
            </div>
            <div className="p-2 flex flex-col justify-center gap-y-4 items-center bg-white rounded shadow w-full aspect-square">
              <EnvelopeIcon className="w-10 h-10 text-amber-500" />
              <div className="text-lg font-semibold">Email</div>
              <div>Quizme@something.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
