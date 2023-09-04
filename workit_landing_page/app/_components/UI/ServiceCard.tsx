import { IServiceCardData } from "@/types/types";
import React from "react";
interface IServiceCard {
  cardData: IServiceCardData;
  number: number;
}
export const ServiceCard: React.FC<IServiceCard> = ({ cardData, number }) => {
  const { name, description } = cardData;
  return (
    <div className="w-full max-w-[573px] flex flex-col md:flex-row xl:flex-col items-center gap-[24px]">
      <div className="border-[1px] border-dark-purple rounded-full w-[48px]  h-[46px] xl:w-[56px] xl:h-[56px] text-[20px] leading-[36px] font-semibold md:text-[24px] md:leading-[40px] font-fraunces flex items-center justify-center ">
        {number}
      </div>
      <div className="flex flex-col gap-[16px] xl:gap-[28px] text-center md:text-left xl:text-center w-full">
        <h3 className=" font-fraunces text-heading-XS xl:text-headingS  text-dark-purple">
          {name}
        </h3>
        <p className=" text-davys-grey ">{description}</p>
      </div>
    </div>
  );
};
