import { ICardData } from "@/types/types";
import Image from "next/image";
import React from "react";

export const LimitationCard: React.FC<{ cardData: ICardData }> = ({
  cardData,
}) => {
  const { title, text, iconUrl } = cardData;
  return (
    <div className="w-full p-[24px] box-shadow rounded-[16px]">
      <div className="flex flex-row items-center">
        <Image src={iconUrl} width={32} height={32} alt={`${title} icon`} />{" "}
        <p className="w-full text-headingS text-gunmetal">{title}</p>
      </div>
      <p className="text-bodyM">{text}</p>
    </div>
  );
};
