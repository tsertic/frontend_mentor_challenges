import React from "react";
import { HeroGradiant } from "../esthetics/HeroGradiant";
import { BMICalculator } from "../main/BMICalculator/BMICalculator";

export const Hero = () => {
  return (
    <div className="container-wide xl:relative xl:pb-[90px]">
      <HeroGradiant />
      <div className="flex flex-col xl:flex-row max-xl:items-center  gap-[48px] md:gap-[40px] xl:gap-[32px] pt-[96px] md:pt-[112px] xl:pt-[167px] max-xl:padding-x">
        <div className="flex-1 text-center xl:text-left xl:pt-[100px] max-w-[686px]">
          <h1 className="text-headingL xl:text-headingXL  capitalize text-gunmetal mb-[24px] xl:mb-[35px] ">
            Body Mass
            <br /> Index Calculator
          </h1>
          <p className="xl:max-w-[465px]">
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>
        <div className="flex-1">
          <BMICalculator />
        </div>
      </div>
    </div>
  );
};
