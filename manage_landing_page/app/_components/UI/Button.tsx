import React from "react";
import Link from "next/link";
interface IButton {
  children: React.ReactNode;
  href: string;
  ariaLabel: string;
  dark: boolean;
}
export const Button: React.FC<IButton> = ({
  children,
  href,
  ariaLabel,
  dark,
}) => {
  return (
    <Link
      className={`${
        dark
          ? "bg-base-100 text-primary hover:text-primary-focus"
          : "bg-primary text-primary-content shadow-button hover:bg-primary-focus "
      }  text-[13px] leading-normal font-bold  py-[12px] px-[32px] rounded-[22px]`}
      aria-label={ariaLabel}
      href={href}
    >
      {children}
    </Link>
  );
};
