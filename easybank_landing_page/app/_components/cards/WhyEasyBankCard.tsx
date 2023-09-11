import { IWhyEasyBankCard } from "@/types/types";
import React from "react";
import Image from "next/image";
export const WhyEasyBankCard: React.FC<{ cardData: IWhyEasyBankCard }> = ({
  cardData,
}) => {
  const { text, title, iconPath } = cardData;
  return (
    <div className="w-full flex flex-col items-center xl:items-start text-center xl:text-left">
      <Image
        width={72}
        height={72}
        src={iconPath}
        alt={`${title} icon`}
        className="mb-[24px] xl:mb-[40px]"
      />
      <h3 className="mb-[16px] xl:mb-[26px] text-base-content-heading text-[20px] xl:text-[28px] leading-[28px] font-light">
        {title}
      </h3>
      <p>{text}</p>
    </div>
  );
};
