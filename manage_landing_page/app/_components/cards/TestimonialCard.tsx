import React from "react";
import Image from "next/image";
import { ITestimonialCardData } from "@/types/types";
interface ITestimonialCard {
  cardData: ITestimonialCardData;
}
export const TestimonialCard: React.FC<ITestimonialCard> = ({ cardData }) => {
  const { author, text, avatarUrl } = cardData;
  return (
    <div className="w-full lg:min-w-[540px]  bg-base-200 max-w-[540px] relative pt-[60px] pb-[40px] px-[21px] lg:px-[40px] text-center ">
      <Image
        src={avatarUrl}
        height={72}
        width={72}
        alt={`${author} avatar`}
        className="absolute top-[-36px] left-[50%] -translate-x-1/2"
      />
      <p className="text-base-content font-bold mb-[19px]">{author}</p>
      <p>"{text}"</p>
    </div>
  );
};
