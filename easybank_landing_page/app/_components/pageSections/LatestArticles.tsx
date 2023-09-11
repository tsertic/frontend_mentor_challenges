import { latest_articles } from "@/constants";
import React from "react";
import { ArticleCard } from "../cards/ArticleCard";

export const LatestArticles = () => {
  return (
    <div className="container-wide">
      <h2 className="text-headingM xl:text-headingL text-base-content-heading text-center xl:text-left mb-[32px] xl:mb-[40px]  ">
        Latest Articles
      </h2>
      <div className="flex flex-col xl:flex-row gap-[24px] xl:gap-[30px] ">
        {latest_articles.map((article) => {
          return <ArticleCard cardData={article} key={article._id} />;
        })}
      </div>
    </div>
  );
};
