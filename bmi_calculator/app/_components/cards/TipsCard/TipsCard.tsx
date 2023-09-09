import { ICardData } from "@/types/types";
import Image from "next/image";
import React from "react";

export const TipsCard: React.FC<{ tip: ICardData }> = ({ tip }) => {
  const { title, text, iconUrl } = tip;
  return (
    <div className="w-full flex flex-col md:flex-row xl:flex-col md:items-center xl:items-start gap-[32px] md:gap-[40px] xl:gap-[45px]">
      <div>
        <Image src={iconUrl} width={64} height={64} alt={`${title} icon`} />
      </div>
      <div className="w-full">
        <h3 className="mb-[24px] text-headingM text-gunmetal">{title}</h3>
        <p className="text-bodyM">{text}</p>
      </div>
    </div>
  );
};
