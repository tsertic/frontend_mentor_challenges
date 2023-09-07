export interface IBMIForm {
  weight: string;
  height: string;
  setWeight: (weight: string) => void;
  setHeight: (height: string) => void;
}
export type TSiSystem = "imperial" | "metric";
