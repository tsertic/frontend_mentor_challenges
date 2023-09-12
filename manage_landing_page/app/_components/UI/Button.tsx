import React from "react";
import Link from "next/link";
interface IButton {
  children: React.ReactNode;
  href: string;
  ariaLabel: string;
}
export const Button: React.FC<IButton> = ({ children, href, ariaLabel }) => {
  return (
    <Link
      className="bg-primary hover:bg-primary-focus text-primary-content text-[13px] leading-normal font-bold shadow-button py-[12px] px-[32px] rounded-[22px]"
      aria-label={ariaLabel}
      href={href}
    >
      {children}
    </Link>
  );
};
