import { navigation_links } from "@/constants";
import Link from "next/link";
import React from "react";

export const DesktopNavList = () => {
  return (
    <nav className="hidden lg:flex flex-row items-center gap-[30px]">
      {navigation_links.map((item) => {
        return (
          <Link
            href={item.path}
            key={item._id}
            className="relative capitalize hover:text-base-content-heading hover:after:w-full after:w-0 after:h-[4px] after:absolute after:bottom-[-32px] after:left-0 after:bg-primary after:transition-all duration-200 "
          >
            {item.text}
          </Link>
        );
      })}
    </nav>
  );
};
