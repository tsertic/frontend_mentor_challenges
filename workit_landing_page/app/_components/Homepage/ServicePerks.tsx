import { servicePerks } from "@/constants";
import React from "react";
import { ServiceCard } from "../UI/ServiceCard";

export const ServicePerks = () => {
  return (
    <div className="container-wide flex flex-col xl:flex-row items-center gap-[50px]">
      {servicePerks.map((service, i) => {
        return (
          <ServiceCard key={service.name} cardData={service} number={+i + 1} />
        );
      })}
    </div>
  );
};
