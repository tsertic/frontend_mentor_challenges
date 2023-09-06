import { IBMIForm } from "@/types/types";
import React from "react";
import { TextInputNumerical } from "../../UI/TextInputNumerical";

export const MetricForm: React.FC<IBMIForm> = ({
  weight,
  height,
  setWeight,
  setHeight,
}) => {
  return (
    <form className="flex flex-col md:flex-row gap-[16px] md:gap-[24px] w-full ">
      <div className="flex-1">
        <TextInputNumerical
          name="height"
          value={height}
          placeholder="0"
          onChange={setHeight}
          text="cm"
          htmlFor="cm"
        />
      </div>
      <div className="flex-1">
        <TextInputNumerical
          name="weight"
          value={weight}
          placeholder="0"
          onChange={setWeight}
          text="kg"
          htmlFor="kg"
        />
      </div>
    </form>
  );
};
