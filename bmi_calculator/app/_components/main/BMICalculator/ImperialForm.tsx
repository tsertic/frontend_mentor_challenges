import { IBMIForm } from "@/types/types";
import React, { useState } from "react";
import { TextInputNumerical } from "../../UI/TextInputNumerical";
import { convertKgToStones, convertStonesToKg } from "@/utils";

export const ImperialForm: React.FC<IBMIForm> = ({
  weight,
  height,
  setWeight,
  setHeight,
}) => {
  const [stones, setStones] = useState(convertKgToStones(weight)[0]);
  const [lbs, setLbs] = useState(convertKgToStones(weight)[1]);
  const handleWeightInput = (name: string, value: string) => {
    if (name === "lbs") setLbs(value);
    if (name === "stones") setStones(value);
    setWeight(convertStonesToKg(stones, lbs));
  };
  return (
    <form className="flex flex-col  gap-[16px] md:gap-[24px] w-full ">
      <div className="flex gap-[24px]">
        <TextInputNumerical
          name="height"
          value={height}
          placeholder="0"
          onChange={setHeight}
          text="cm"
          htmlFor="cm"
        />
        <TextInputNumerical
          name="height"
          value={height}
          placeholder="0"
          onChange={setHeight}
          text="cm"
          htmlFor="cm"
        />
      </div>
      <div className="flex gap-[24px]">
        <TextInputNumerical
          name="stones"
          value={stones}
          placeholder="0"
          onChange={setWeight}
          text="st"
          htmlFor="st"
        />
        <TextInputNumerical
          name="lbs"
          value={lbs}
          placeholder="0"
          onChange={setWeight}
          text="lbs"
          htmlFor="lbs"
        />
      </div>
    </form>
  );
};
