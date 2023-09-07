import { BMIResultsText } from "@/constants";
import { getIdealKgArrayFromCm } from "@/utils";
import { Content } from "next/font/google";
import React from "react";
interface IBMIResult {
  bmi: number;
  height: number;
}
export const BMIResult: React.FC<IBMIResult> = ({ bmi, height }) => {
  return (
    <div className=" max-w p-[32px] bg-blue text-white   rounded-l-[16px] rounded-r-[99px] results-gradient">
      {bmi === 0 ? (
        <BMIResultNoValue />
      ) : (
        <BMIResultValue bmi={bmi} height={height} />
      )}
    </div>
  );
};

const BMIResultValue: React.FC<IBMIResult> = ({ bmi, height }) => {
  let resultText = "";
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
  const [lowerIdealKg, upperIdealKg] = getIdealKgArrayFromCm(height);
  return (
    <div className="flex gap-[24px]">
      <div className="flex-1">
        <p>Your BMI is...</p>
        <p>{bmi}</p>
      </div>
      <div className="flex-1">
        <p>
          {resultText} <span className=" font-bold">{lowerIdealKg}kgs</span> -{" "}
          <span className="font-bold">{upperIdealKg}kgs</span>
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
