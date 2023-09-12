import { about_cards } from "@/constants";
import React from "react";
import { AboutCard } from "../cards/AboutCard";

export const About = () => {
  return (
    <div className="container-wide flex flex-col items-center lg:items-start lg:flex-row gap-[54px] lg:gap-[125px]">
      <div className="w-full max-w-[445px] text-center lg:text-left ">
        <h2 className="text-headingL text-base-content mb-[13px] lg:mb-[24px] px-[22px] lg:px-0">
          What{"’"}s different about Manage?
        </h2>
        <p className="px-[27px] lg:px-0 lg:max-w-[350px]">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.{" "}
        </p>
      </div>
      <div className="w-full pl-[16px] lg:pl-0 flex-col-center gap-[47px] lg:gap-[40px]">
        {about_cards.map((card, i) => {
          return <AboutCard cardData={card} key={card._id} index={i} />;
        })}
      </div>
    </div>
  );
};
