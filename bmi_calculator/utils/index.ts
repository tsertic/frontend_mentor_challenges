import convert from "convert";
export const convertKgToStones = (kg: string): string[] => {
  if (!+kg) return ["0", "0"];

  const stones = convert(+kg, "kilograms").to("stones");
  const stonesAndPoundsArray = String(stones).split(".");
  //if it is round number to add 0 as second number
  if (!stonesAndPoundsArray[1]) stonesAndPoundsArray.push("0");
  //it will return two values in array, first is stones second is pounds
  return stonesAndPoundsArray;
};

export const convertStonesToKg = (stones: string, lbs: string): string => {
  if (!+stones || !+lbs) return "0";

  const stonesDecimal = `${stones}.${lbs}`;

  return convert(+stonesDecimal, "stones").to("kilograms").toString();
};

export const calculateBMI = (cm: string, kg: string) => {
  if (!+cm || !+kg) return 0;
  if (+cm === 0 || +kg === 0) return 0;
  const m2 = (+cm * +cm) / 10000;
  return (+kg / m2).toFixed(2);
};
