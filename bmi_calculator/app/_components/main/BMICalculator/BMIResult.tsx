import React from "react";
interface IBMIResult {
  bmi: number;
}
export const BMIResult: React.FC<IBMIResult> = ({ bmi }) => {
  return (
    <div className="max-w ">
      {bmi === 0
        ? " Unesite vrijednosti za BMI kalkulaciju"
        : `Vaš bmi je ${bmi}`}
      <div>avd</div>
    </div>
  );
};
