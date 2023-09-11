"use client";
import { IArticleCard } from "@/types/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export const ArticleCard: React.FC<{ cardData: IArticleCard }> = ({
  cardData,
}) => {
  const router = useRouter();
  const { title, description, author, imgUrl, _id } = cardData;
  const handleArticleClick = () => {
    /* router.push(`/articles/${_id}`); */
    router.push("#");
  };
  return (
    <div
      className="w-full rounded-[5px] bg-base-100 group cursor-pointer "
      onClick={handleArticleClick}
    >
      <div className="w-full h-[200px]">
        <Image
          src={imgUrl}
          height={650}
          width={400}
          alt="article header image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="py-[24px] px-[31px] xl:px-[24px] flex flex-col gap-[8px]">
        <p className="text-[10px] font-normal leading-[18px]">By {author}</p>
        <h3 className=" text-base-content-heading group-hover:text-primary-focus text-[16px] leading-[20px] font-light transition-all duration-200">
          {title}
        </h3>
        <p className="text-[13px] font-normal leading-[18px]">
          {description}...
        </p>
      </div>
    </div>
  );
};
