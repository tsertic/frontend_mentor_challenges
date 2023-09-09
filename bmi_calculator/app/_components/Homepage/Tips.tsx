import { tipsCards } from "@/constants";
import React from "react";
import { ICardData } from "@/types/types";
import { TipsCard } from "../cards/TipsCard/TipsCard";
export const Tips = () => {
  return (
    <div className="hero-gradient w-full max-w-[1400px] mx-auto xl:rounded-[35px] py-[56px] md:py-[60px] md:px-[40px] xl:pt-[72px] xl:pb-[96px] xl:px-[117px]">
      <div className="container-wide flex flex-col xl:flex-row gap-[40px] xl:gap-[30px] px-[18px] ">
        {tipsCards.map((tip: ICardData) => {
          return <TipsCard tip={tip} key={tip._id} />;
        })}
      </div>
    </div>
  );
};
