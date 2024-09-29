import { DashCard } from "@/components/DashCard";
import { faStar as regStar } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <div className="grid grid-cols-4 gap-6 h-full">
        <div className="col-span-1 flex flex-col gap-6 h-full">
          <DashCard>
            <div className="w-full aspect-square flex flex-col gap-8 items-center justify-center">
              <div className="w-40 aspect-square rounded-full bg-zinc-100"></div>
              <div className="text-2xl font-semibold text-zinc-100">
                Maher Nassrallah
              </div>
            </div>
          </DashCard>
          <DashCard>
            <div className="w-full flex justify-center gap-2">
              <FontAwesomeIcon icon={faStar} className="w-8 text-zinc-100" />
              <FontAwesomeIcon icon={faStar} className="w-8 text-zinc-100" />
              <FontAwesomeIcon icon={faStar} className="w-8 text-zinc-100" />
              <FontAwesomeIcon icon={faStar} className="w-8 text-zinc-100" />
              <FontAwesomeIcon icon={regStar} className="w-8 text-zinc-100" />
            </div>
          </DashCard>
        </div>
        <div className="col-span-3 flex flex-col h-full gap-6">
          <div className="flex items-center gap-6 w-full">
            <DashCard>
              <div className="w-full flex flex-col gap-1 text-zinc-100 font-medium">
                <div className="text-lg">Posted Quizzes</div>
                <div className="text-6xl text-center">47</div>
              </div>
            </DashCard>
            <DashCard>
              <div className="w-full flex flex-col gap-1 text-zinc-100 font-medium">
                <div className="text-lg">Participants</div>
                <div className="text-6xl text-center">123</div>
              </div>
            </DashCard>
            <DashCard>
              <div className="w-full flex flex-col gap-1 text-zinc-100 font-medium">
                <div className="text-lg">Average Mark</div>
                <div className="text-6xl text-center">88%</div>
              </div>
            </DashCard>
          </div>
          <div className="flex flex-col gap-6 col-span-3">
            <DashCard>
              <div className="text-zinc-100">
                <span className="font-semibold">Technical quiz:</span>
                <span className="ml-2 underline">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Enim, quo.
                </span>
              </div>
            </DashCard>
            <DashCard>
              <div className="text-zinc-100">
                <span className="font-semibold">Technical quiz:</span>
                <span className="ml-2 underline">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Enim, quo.
                </span>
              </div>
            </DashCard>
            <DashCard>
              <div className="text-zinc-100">
                <span className="font-semibold">Technical quiz:</span>
                <span className="ml-2 underline">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Enim, quo.
                </span>
              </div>
            </DashCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
//number of quizzez
// total particips
// avg marks
// list of quizzez
