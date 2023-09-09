export interface IBMIForm {
  weight: string;
  height: string;
  setWeight: (weight: string) => void;
  setHeight: (height: string) => void;
}
export type TSiSystem = "imperial" | "metric";

export interface ICardData {
  _id: string;
  iconUrl: string;
  title: string;
  text: string;
}
