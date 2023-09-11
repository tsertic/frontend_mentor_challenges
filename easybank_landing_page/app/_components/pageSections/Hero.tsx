import React from "react";
import Image from "next/image";
import { GradientButton } from "../UI/GradientButton";

export const Hero = () => {
  return (
    <div className="w-full relative h-full border-2 border-transparent overflow-x-hidden">
      <div className="h-[423px] w-full lg:hidden relative">
        <Image
          src="/images/bg-intro-mobile.svg"
          width={375}
          height={423}
          alt="hero section decoration image"
          className="w-full h-full object-fit"
        />
        <Image
          src="/images/image-mockups.png"
          width={327}
          height={402}
          alt="phone mockupas"
          className="absolute bottom-[60px] right-[50%] translate-x-1/2 "
        />
      </div>
      <div className="container-wide lg:my-[180px]">
        <div className="text-center lg:text-left  w-full lg:max-w-[447px] ">
          <h1 className="text-headingL lg:text-headingXL text-base-content-heading  mb-[16px] xl:mb-[24px]">
            Next generation
            <br />
            digital banking
          </h1>
          <p className=" mb-[32px] xl:mb-[36px] text-bodyS xl:text-bodyL">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <GradientButton>Request Invite</GradientButton>
        </div>{" "}
      </div>
      <div className="hidden lg:block absolute right-[0] top-[0]  w-full h-full  overflow-hidden">
        <Image
          src="/images/bg-intro-desktop.svg"
          width={1270}
          height={1024}
          alt="hero section decoration image"
          className="  absolute right-[-500px] top-[-260px]"
        />
      </div>
      <Image
        src="/images/image-mockups.png"
        width={732}
        height={901}
        alt="phone mockupas"
        className="hidden lg:block absolute md:right-[-150px] xl:right-[-120px] top-[-110px] "
      />
    </div>
  );
};
