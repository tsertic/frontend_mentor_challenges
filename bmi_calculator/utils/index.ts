import { healthyBMILowerRange, healthyBMIUpperRange } from "@/constants";
import convert from "convert";
const roundNumberToTwoDecimal = (num: number): number =>
  Math.round(num * 100) / 100;

export const convertKgToStones = (kg: string): [string, string] => {
  if (!+kg) return ["", ""];
  let lbs = convert(+kg, "kilogram").to("lb");
  const stones = convert(lbs, "lb").to("stones");
  const lbsRemaining = convert(stones - Math.floor(stones), "stones").to("lb");

  //it will return two values in array, first is stones second is pounds
  return [String(Math.floor(stones)), String(Math.round(lbsRemaining))];
};

export const convertStonesToKg = (stones: string, lbs: string): string => {
  if (!+stones && !+lbs) return "";
  let lbsNum: number;
  if (!+lbs) {
    lbsNum = 0;
  } else {
    lbsNum = Number(lbs);
  }

  if (!+stones) return String(convert(lbsNum, "lb").to("kg").toFixed(2));

  lbsNum += convert(+stones, "stones").to("lb");
  console.log(lbsNum, "lbsNum");
  return String(roundNumberToTwoDecimal(convert(lbsNum, "lb").to("kg")));
};

export const convertCmToFtIn = (cm: string): [string, string] => {
  if (!+cm) return ["", ""];
  let numCm = +cm;
  let inchFromCm = convert(numCm, "cm").to("inch");
  const feetFromInch = inchFromCm / 12;
  let feetInchArray = String(feetFromInch).split(".");
  const feet = feetInchArray[0];

  if (!feetInchArray[1]) return [feet, "0"];
  const inch = Math.round(convert(+`0.${feetInchArray[1]}`, "feet").to("inch"));
  return [feet, String(inch)];
};
export const convertFtInchToCm = (ft: string, inch: string): string => {
  let inchNum = 0;
  if (+inch) inchNum += +inch;
  //if feet is invalid or there is no feet ,return inch to cm
  if (!+ft) return String(Math.round(convert(inchNum, "in").to("cm")));

  inchNum += convert(+ft, "feet").to("inch");

  return String(Math.round(convert(inchNum, "in").to("cm")));
};
export const calculateBMI = (cm: string, kg: string) => {
  if (!+cm || !+kg) return 0;
  if (+cm === 0 || +kg === 0) return 0;
  const m2 = (+cm * +cm) / 10000;
  return roundNumberToTwoDecimal(+kg / m2).toFixed(1);
};

export const getKgFromBMIAndCm = (cm: number, bmi: number) => {
  const m2 = (cm * cm) / 10000;
  return roundNumberToTwoDecimal(m2 * bmi);
};
export const getIdealKgArrayFromCm = (cm: number): [number, number] => {
  return [
    getKgFromBMIAndCm(cm, healthyBMILowerRange),
    getKgFromBMIAndCm(cm, healthyBMIUpperRange),
  ];
};
