import React from "react";
import { Logo } from "../../UI/Logo";
import { footer_links, footer_social_icons } from "@/constants";
import Link from "next/link";
import { Button } from "../../UI/Button";
import { EmailForm } from "../../shared/EmailForm/EmailForm";

export const Footer = () => {
  return (
    <footer className="bg-secondary-200 pt-[51px] pb-[30px] lg:py-[62px]">
      <div className="container-wide flex flex-col-reverse lg:flex-row h-full ">
        <p className="text-center text-secondary-content/50 text-[13px] xl:hidden">
          Copyright 2020. All Rights Reserved
        </p>
        <div className=" flex flex-col-reverse lg:flex-col justify-between max-lg:gap-[50px] max-lg:mb-[50px] max-lg:items-center px-[40px] lg:px-0 lg:mr-[132px]">
          <Logo dark={false} />
          <ul className="flex justify-between w-full ">
            {footer_social_icons.map((si) => {
              return (
                <a
                  href={si.url}
                  aria-label={`link to ${si.type} page`}
                  key={si._id}
                >
                  {
                    <si.icon className="fill-base-100 w-[32px] h-[32px] lg:w-[20px] lg:h-[20px]" />
                  }
                </a>
              );
            })}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-x-[106px] lg:gap-x-[30px] gap-y-[13px] text-secondary-content capitalize text-footerLink max-lg:mb-[50px] pl-[60px] lg:px-0">
          {footer_links.map((link) => {
            return (
              <Link
                href={link.path}
                className="w-fit lg:w-[255px]"
                key={link._id}
                aria-label={`link to page ${link.text}`}
              >
                {link.text}
              </Link>
            );
          })}
        </div>
        <div className=" ml-auto flex flex-col items-end justify-between max-xl:w-full max-xl:px-[24px] max-xl:mb-[64px]">
          <EmailForm />

          <p className="text-right text-secondary-content/50 text-[13px] max-xl:hidden">
            Copyright 2020. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
