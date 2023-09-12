import { IconType } from "react-icons";

export interface ISocialIcon {
  _id: string;
  type: string;
  icon: IconType;
  url: string;
}

export interface IAboutCardData {
  _id: string;
  title: string;
  text: string;
}
export interface ITestimonialCardData {
  _id: string;
  author: string;
  text: string;
  avatarUrl: string;
}
