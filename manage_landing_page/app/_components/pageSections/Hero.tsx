import React from "react";
import { Button } from "../UI/Button";
import Image from "next/image";
export const Hero = () => {
  return (
    <div className="relative container-wide flex flex-col-reverse lg:flex-row gap-[19px] lg:gap-[115px] px-[32px] lg:px-0">
      <div className="w-full lg:max-w-[445px]  text-center lg:text-left lg:pt-[50px]">
        <h1 className=" text-headingL lg:text-headingXL mb-[9px] lg:mb-[16px] text-base-content">
          Bring everyone together to build better products.
        </h1>
        <p className="mb-[29px] xl:mb-[40px]">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button dark={false} href="/" ariaLabel="Link to join">
          Get Started
        </Button>
      </div>
      <div className="w-full flex justify-center  ">
        <Image
          src="/images/illustration-intro.svg"
          width={540}
          height={485}
          alt="illustration of graphs"
          className="h-[286px] lg:h-[485px] max-lg:object-contain"
        />
      </div>
    </div>
  );
};
