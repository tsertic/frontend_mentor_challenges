import React from "react";
import { Logo } from "../UI/Logo";
import Image from "next/image";
import { footerSocialIcons } from "@/constants";
import { SocialIcons } from "../icons/SocialIcons";
export const Footer = () => {
  return (
    <footer className="flex flex-col max-w-[116px] gap-[56px]  mx-auto items-center">
      <Logo type="dark" />
      <div className="flex justify-between w-full items-center">
        {footerSocialIcons.map((icon) => {
          if (
            icon.name !== "facebook" &&
            icon.name !== "twitter" &&
            icon.name !== "instagram"
          )
            return;
          return (
            <a href={icon.url} className="cursor-pointer ">
              <SocialIcons name={icon.name} />
            </a>
          );
        })}
      </div>
    </footer>
  );
};
