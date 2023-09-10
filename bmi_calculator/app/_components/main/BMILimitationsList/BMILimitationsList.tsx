import { bmiLimitationsCards } from "@/constants";
import React from "react";
import { LimitationCard } from "../../cards/LimitationCard/LimitationCard";
import Image from "next/image";
export const BMILimitationsList = () => {
  return (
    <div className="relative w-full xl:max-w-[961px] ml-auto flex flex-col items-center xl:items-end">
      <Image
        src="\images\pattern-curved-line-right.svg"
        width={94}
        height={122}
        alt="decorative curve line"
        className="hidden xl:block absolute left-[-50px] top-[280px] "
      />
      <div className="grid md:grid-cols-2 gap-[15px] xl:hidden">
        {bmiLimitationsCards.map((limitation) => {
          return (
            <div
              key={limitation._id}
              className=" md:last:translate-x-1/2 mb-[16px] md:mb-[24px]"
            >
              <LimitationCard cardData={limitation} key={limitation._id} />;
            </div>
          );
        })}
      </div>
      <div className="hidden xl:block w-full">
        <div className="flex justify-end w-full mb-[32px] pr-[100px]">
          <LimitationCard cardData={bmiLimitationsCards[0]} />
        </div>
        <div className="flex gap-[32px] mb-[24px] justify-end">
          <LimitationCard cardData={bmiLimitationsCards[1]} />
          <LimitationCard cardData={bmiLimitationsCards[2]} />
        </div>
        <div className="w-full flex justify-start gap-[32px] mb-[24px]">
          <LimitationCard cardData={bmiLimitationsCards[3]} />
          <LimitationCard cardData={bmiLimitationsCards[4]} />
        </div>
      </div>
    </div>
  );
};
