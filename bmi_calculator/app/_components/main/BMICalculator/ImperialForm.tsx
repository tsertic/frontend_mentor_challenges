import { IBMIForm } from "@/types/types";
import React, { useEffect, useState } from "react";
import { TextInputNumerical } from "../../UI/TextInputNumerical";
import {
  convertCmToFtIn,
  convertFtInchToCm,
  convertKgToStones,
  convertStonesToKg,
} from "@/utils";

export const ImperialForm: React.FC<IBMIForm> = ({
  weight,
  height,
  setWeight,
  setHeight,
}) => {
  const [stones, setStones] = useState(convertKgToStones(weight)[0]);
  const [lbs, setLbs] = useState(convertKgToStones(weight)[1]);
  const [ft, setFt] = useState(convertCmToFtIn(height)[0]);
  const [inch, setInch] = useState(convertCmToFtIn(height)[1]);
  useEffect(() => {
    console.log(stones, lbs, "before set weight");
    setWeight(convertStonesToKg(stones, lbs));
  }, [stones, lbs]);
  useEffect(() => {
    console.log(stones, lbs, "before set weight");
    setHeight(convertFtInchToCm(ft, inch));
  }, [ft, inch]);
  const handleWeightInput = (value: string, name: string | undefined) => {
    if (!name) return;
    if (isNaN(+value)) return;
    if (value.includes(".")) return;
    if (name === "lbs") setLbs(value);
    if (name === "stones") setStones(value);
  };
  const handleHeightInput = (value: string, name: string | undefined) => {
    if (!name) return;
    if (isNaN(+value)) return;
    if (value.includes(".")) return;
    if (name === "ft") setFt(value);
    if (name === "inch") setInch(value);
  };
  return (
    <form className="flex flex-col  gap-[16px] md:gap-[24px] w-full ">
      <div className="flex gap-[24px]">
        <TextInputNumerical
          name="ft"
          value={ft}
          placeholder="0"
          onChange={handleHeightInput}
          text="ft"
          htmlFor="ft"
        />
        <TextInputNumerical
          name="inch"
          value={inch}
          placeholder="0"
          onChange={handleHeightInput}
          text="in"
          htmlFor="in"
        />
      </div>
      <div className="flex gap-[24px]">
        <TextInputNumerical
          name="stones"
          value={stones}
          placeholder="0"
          onChange={handleWeightInput}
          text="st"
          htmlFor="st"
        />
        <TextInputNumerical
          name="lbs"
          value={lbs}
          placeholder="0"
          onChange={handleWeightInput}
          text="lbs"
          htmlFor="lbs"
        />
      </div>
    </form>
  );
};
