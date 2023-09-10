import React from "react";
import { BMILimitationsList } from "../main/BMILimitationsList/BMILimitationsList";

export const BmiLimitations = () => {
  return (
    <div className="container-wide relative ">
      <div className="text-center xl:text-left w-full xl:max-w-[564px] xl:absolute xl:top-0 xl:left-0 mb-[56px]">
        <p className="text-headingLMobile xl:text-headingL mb-[32px]  xl:mb-[35px] text-gunmetal ">
          Limitations of BMI
        </p>
        <p>
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      <BMILimitationsList />
    </div>
  );
};
