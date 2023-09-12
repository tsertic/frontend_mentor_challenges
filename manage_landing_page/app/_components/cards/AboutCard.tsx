import { IAboutCardData } from "@/types/types";
import React from "react";
interface IAboutCard {
  cardData: IAboutCardData;
  index: number;
}
export const AboutCard: React.FC<IAboutCard> = ({ cardData, index }) => {
  const { title, text } = cardData;
  return (
    <div className="lg:pl-[95px]">
      <div className="relative flex items-center text-headingCard mb-[8px] lg:mb-[19px] bg-base-300 lg:bg-inherit rounded-l-[39px]">
        <span className="lg:absolute left-[-95px] top-[-8px] bg-primary text-primary-content px-[23.5px] py-[8px] rounded-[39px] ">
          0{index + 1}
        </span>
        <h3 className="text-base-content">{title}</h3>
      </div>
      <p>{text}</p>
    </div>
  );
};
