import React from "react";
import { Button } from "../UI/Button";
import Image from "next/image";
export const HeroSection = () => {
  return (
    <section className=" pt-[130px] pb-[156px] px-[16px] bg-dark-purple text-white relative flex flex-col items-center rounded-bottom-large">
      <h1 className="text-center font-fraunces mb-[40px] text-[46px] leading-[50px] md:text-headingM xl:text-headingL w-full md:max-w-[573px] lg:max-w-[635px]">
        Data{" "}
        <span className="border-b-[2px] border-eucaplyptus pb-[-5px] inline-block">
          tailored
        </span>{" "}
        to
        <br />
        your needs.
      </h1>
      <Button>Learn More</Button>

      <Image
        src="/images/bg-pattern-1.svg"
        width={270}
        height={215}
        alt="decorative spiral"
        className="absolute hidden md:block md:left-[-180px] xl:left-[-100px] "
      />
      <div className="absolute h-[152px] w-[141px] right-0 hidden md:block top-[300px] overflow-hidden">
        <Image
          src="/images/bg-pattern-2.svg"
          width={141}
          height={112}
          alt="decorative spiral"
          className="absolute top-0 md:right-[-70px] xl:right-[-50px] "
        />
      </div>
      <div className="h-[10px] md:h-[88px] xl:h-[139px] flex flex-col items-center">
        <Image
          src="/images/image-hero.webp"
          width={715}
          height={427}
          alt="mobile phone"
          className="absolute bottom-[-20%] xl:bottom-[-30%] w-[290px] h-[198px] md:w-[479px] md:h-[276px] xl:w-[715px] xl:h-[427px]"
        />
      </div>
    </section>
  );
};
