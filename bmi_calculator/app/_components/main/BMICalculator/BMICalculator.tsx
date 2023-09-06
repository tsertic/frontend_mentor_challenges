import React from "react";
import { RadioButton } from "../../UI/RadioButton";

export const BMICalculator = () => {
  return (
    <div className="w-full bg-white box-shadow  felx flex-col gap-[24px] md:gap-[32px] max-w-[564px] p-[24px] md:p-[32px]">
      BMICalculator
      <form>
        <div className="flex w-full items-center gap-[24px]">
          <div className="flex-1">
            <RadioButton
              value="metric"
              name="si_system"
              htmlFor="metric"
              text="metric"
            />
          </div>
          <div className="flex-1">
            <RadioButton
              value="imperial"
              name="si_system"
              htmlFor="imperial"
              text="imperial"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
