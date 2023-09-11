import { why_easybank_cards } from "@/constants";
import React from "react";
import { WhyEasyBankCard } from "../cards/WhyEasyBankCard";

export const WhyEasyBank = () => {
  return (
    <div className="container-wide">
      <div className="text-center xl:text-left mb-[56px] xl:mb-[72px] max-w-[565px]">
        <h2 className="text-headingM lg:text-headingL text-base-content-heading mb-[14px] xl:mb-[16px]">
          Why choose Easybank?
        </h2>
        <p className="font-bodyL">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-[32px] xl:gap-[30px] justify-between">
        {why_easybank_cards.map((card) => {
          return <WhyEasyBankCard cardData={card} key={card._id} />;
        })}
      </div>
    </div>
  );
};
