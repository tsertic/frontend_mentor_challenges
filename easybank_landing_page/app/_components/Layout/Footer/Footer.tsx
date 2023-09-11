import Image from "next/image";
import React from "react";
import { Logo } from "../../UI/Logo";
import { footer_links, footer_social_icons } from "@/constants";
import Link from "next/link";
import { GradientButton } from "../../UI/GradientButton";
import { SocialIcons } from "../../UI/SocialIcons";

export const Footer = () => {
  return (
    <footer className="w-full py-[40px] xl:py-[48px] bg-secondary text-secondary-content ">
      <div className="container-wide flex flex-col xl:flex-row items-center gap-[32px] xl:gap-[132px] ">
        <div className="flex flex-col justify-end gap-[32px] xl:gap-[55px] border-yellow-500 ">
          <Logo type="light" />
          <div className="flex flex-row gap-[13px] items-center">
            {footer_social_icons.map((icon) => {
              return <SocialIcons icon={icon} key={icon._id} />;
            })}
          </div>
        </div>
        <nav className="grid items-center xl:grid-cols-2 text-center xl:text-left gap-[8px]">
          {footer_links.map((link) => {
            return (
              <Link
                key={link._id}
                href={link.path}
                className="text-bodyS capitalize w-[160px] hover:text-primary-focus transition-all duration-200"
              >
                {link.text}
              </Link>
            );
          })}
        </nav>
        <div className=" flex flex-col items-center xl:items-end gap-[24px]  xl:ml-auto">
          <div>
            <GradientButton>Request Invite</GradientButton>
          </div>
          <p className=" text-bodyS text-secondary-content/50">
            © Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
