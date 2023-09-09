import { ICardData } from "@/types/types";
import Image from "next/image";
import React from "react";

export const LimitationCard: React.FC<{ cardData: ICardData }> = ({
  cardData,
}) => {
  const { title, text, iconUrl } = cardData;
  return (
    <div className="w-full bg-white p-[24px] box-shadow rounded-[16px] max-w-[365px] max-xl:h-full">
      <div className="flex flex-row items-center gap-[16px] mb-[16px]">
        <Image src={iconUrl} width={32} height={32} alt={`${title} icon`} />{" "}
        <p className="w-full text-headingS text-gunmetal">{title}</p>
      </div>
      <p className="text-bodyM">{text}</p>
    </div>
  );
};
