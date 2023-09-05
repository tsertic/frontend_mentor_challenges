import Image from "next/image";
import React from "react";
import { Button } from "../UI/Button";
export const About = () => {
  return (
    <div className="w-full md:max-w-[689px] md:mx-auto xl:container-wide relative md:pb-[200px] xl:pb-[100px]">
      <Image
        src="/images/image-founder.webp"
        width={477}
        height={477}
        alt="Louis Graham founder of workit"
        className="w-[278px] h-[278px] xl:w-[477px] xl:h-[477px] relative max-md:mx-auto  z-[-10] "
      />
      <div className=" flex flex-col items-center max-md:text-center md:absolute mt-[-40px] z-10 right-0 bottom  md:bottom-0 bg-dark-purple text-white p-[32px] md:p-[56px] xl:p-[64px] w-full md:max-w-[514px] xl:max-w-[730px]">
        <h3 className="text-headingS md:text-[48px] xl:text-headingM font-fraunces mb-[16px] md:mb-[24px] xl:mb-[32px] text-center md:text-left ">
          Be the first to test
        </h3>
        <p className="mb-[24px] xl:mb-[32px]">
          Hi, I{"'"}m Louis Graham, the founder of the company. Book a demo call
          with me to become a beta tester for our app and kickstart your
          company. Apply for access below and I{"’"}ll be in touch to schedule a
          call.
        </p>
        <Button ariaLabel="apply for test">Apply for test</Button>
        <Image
          src="/images/bg-pattern-3.svg"
          width={173}
          height={137}
          alt="decoration purpose, pattern spirals"
          className="hidden md:block absolute  bottom-[-50px] xl:right-[60px] md:right-0"
        />
      </div>
    </div>
  );
};
