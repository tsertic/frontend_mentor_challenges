import React from "react";
import { Logo } from "../UI/Logo";
export const Footer = () => {
  return (
    <footer className="flex flex-col max-w-[116px] gap-[56px]  mx-auto items-center">
      <Logo type="dark" />
      <div>Socials</div>
    </footer>
  );
};
