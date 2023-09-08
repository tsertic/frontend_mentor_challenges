import { BMIResultsText } from "@/constants";
import { TSiSystem } from "@/types/types";
import { getIdealKgArrayFromCm, getIdealStLbsArrayFromCm } from "@/utils";
import { Content } from "next/font/google";
import React from "react";
interface IBMIResult {
  bmi: number;
  height: number;
  siSystem: TSiSystem;
}
export const BMIResult: React.FC<IBMIResult> = ({ bmi, height, siSystem }) => {
  return (
    <div className=" max-w p-[32px] bg-blue text-white   rounded-l-[16px] rounded-r-[99px] results-gradient">
      {bmi === 0 ? (
        <BMIResultNoValue />
      ) : (
        <BMIResultValue bmi={bmi} height={height} siSystem={siSystem} />
      )}
    </div>
  );
};

const BMIResultValue: React.FC<IBMIResult> = ({ bmi, height, siSystem }) => {
  let resultText = "";
  let idealWeightText: React.ReactElement = <></>;
  if (bmi < 18.5) {
    resultText = BMIResultsText["underweight"].text;
  }
  if (bmi >= 18.5 && bmi <= 24.9) {
    resultText = BMIResultsText["healthy"].text;
  }
  if (bmi > 25 && bmi <= 29.9) {
    resultText = BMIResultsText["overweight"].text;
  }
  if (bmi > 30) {
    resultText = BMIResultsText["obese"].text;
  }
  if (siSystem === "imperial") {
    const { min, max } = getIdealStLbsArrayFromCm(height);
    idealWeightText = (
      <>
        <span className=" font-bold">
          {min.st}St {min.lbs}lbs
        </span>{" "}
        -{" "}
        <span className="font-bold">
          {max.st}St {max.lbs}lbs
        </span>
      </>
    );
  }
  if (siSystem === "metric") {
    const [lowerIdealKg, upperIdealKg] = getIdealKgArrayFromCm(height);
    idealWeightText = (
      <>
        <span className=" font-bold">{lowerIdealKg}kgs</span> -{" "}
        <span className="font-bold">{upperIdealKg}kgs</span>
      </>
    );
  }

  return (
    <div className="flex gap-[24px]">
      <div className="flex-1">
        <p className="text-bodyM_bold">Your BMI is...</p>
        <p className="text-headingXL">{bmi}</p>
      </div>
      <div className="flex-1">
        <p>
          {resultText} {idealWeightText}
        </p>
      </div>
    </div>
  );
};
const BMIResultNoValue = () => {
  return (
    <div className=" max-sm:text-center">
      <p className="text-headingM mb-[16px]">Welcome!</p>
      <p className="text-bodyS">
        Enter your height and weight and you’ll see your BMI result here
      </p>
    </div>
  );
};
