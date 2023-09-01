import React from "react";
import { Button } from "../UI/Button";

export const HeroSection = () => {
  return (
    <section className="pt-[130px] pb-[156px] px-[16px] bg-dark-purple text-white">
      <h1 className="text-center font-fraunces mb-[40px] text-[46px] leading-[50px] md:text-headingM xl:text-headingL w-full md:max-w-[573px] lg:max-w-[635px]">
        Data <span className="border-b-[3px] border-eucaplyptus">tailored</span>{" "}
        to
        <br />
        your needs.
      </h1>
      <Button>Learn More</Button>
    </section>
  );
};
