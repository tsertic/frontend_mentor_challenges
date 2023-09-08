"use client";
import React, { useEffect, useState } from "react";
import { RadioButton } from "../../UI/RadioButton";
import { BMIResult } from "./BMIResult";
import { MetricForm } from "./MetricForm";
import { calculateBMI } from "@/utils";
import { ImperialForm } from "./ImperialForm";
import { TSiSystem } from "@/types/types";

export const BMICalculator = () => {
  const [siSystem, setSiSystem] = useState<TSiSystem>("metric");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(0);
  useEffect(() => {
    if (weight === "" || height === "") setBmi(0);
    if (weight && height) {
      setBmi(Number(calculateBMI(height, weight)));
    }
  }, [weight, height]);
  const handleSetWeight = (value: string) => {
    if (isNaN(+value)) return;
    setWeight(value);
  };
  const handleSetHeight = (value: string) => {
    if (isNaN(+value)) return;
    setHeight(() => {
      return value;
    });

    setBmi(() => Number(calculateBMI(height, weight)));
  };

  return (
    <div className="w-full bg-white box-shadow rounded-[16px] flex flex-col gap-[24px] md:gap-[32px] md:max-w-[686px] xl:max-w-[564px] p-[24px] md:p-[32px]">
      <h1 className="text-gunmetal text-headingM ">Enter your details below</h1>
      <div className="flex w-full items-center gap-[24px]">
        <div className="flex-1">
          <RadioButton
            value="metric"
            name="si_system"
            htmlFor="metric"
            text="metric"
            onRadioChange={setSiSystem}
            siSystem={siSystem}
          />
        </div>
        <div className="flex-1">
          <RadioButton
            value="imperial"
            name="si_system"
            htmlFor="imperial"
            text="imperial"
            onRadioChange={setSiSystem}
            siSystem={siSystem}
          />
        </div>
      </div>
      {siSystem === "metric" && (
        <MetricForm
          weight={weight}
          height={height}
          setWeight={handleSetWeight}
          setHeight={handleSetHeight}
        />
      )}
      {siSystem === "imperial" && (
        <ImperialForm
          weight={weight}
          height={height}
          setWeight={handleSetWeight}
          setHeight={handleSetHeight}
        />
      )}

      <BMIResult bmi={bmi} height={+height} siSystem={siSystem} />
    </div>
  );
};
