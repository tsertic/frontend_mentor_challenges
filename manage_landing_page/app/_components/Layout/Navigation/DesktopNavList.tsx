import { navigation_links } from "@/constants";
import Link from "next/link";
import React from "react";

export const DesktopNavList = () => {
  return (
    <nav className="hidden lg:flex gap-[32px] items-center">
      {navigation_links.map((item) => {
        return (
          <Link
            href={item.text}
            aria-label={`Link to page ${item.text}`}
            key={item._id}
            className=" text-nav hover:text-base-content/50  capitalize transition-universal "
          >
            {item.text}
          </Link>
        );
      })}
    </nav>
  );
};
