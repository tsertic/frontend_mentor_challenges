import { navigation_links } from "@/constants";
import Link from "next/link";
import React from "react";
interface IMobileNavModal {
  open: boolean;
  toggleNav: () => void;
}
export const MobileNavModal: React.FC<IMobileNavModal> = ({
  open,
  toggleNav,
}) => {
  return (
    <div
      className={`fixed ${
        open ? "top-0" : "top-[-100vh]"
      } left-0 w-full h-screen backdrop-shadow z-20 mobile-padding-x transition-all duration-300`}
      onClick={toggleNav}
    >
      <div className="w-full   mt-[90px] py-[32px] bg-base-100 rounded-[4px] flex flex-col items-center  gap-[24px]">
        {navigation_links.map((item) => {
          return (
            <Link
              href={item.path}
              key={item._id}
              className="capitalize"
              onClick={toggleNav}
            >
              {item.text}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
