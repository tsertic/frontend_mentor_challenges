"use client";
import React, { useState } from "react";
import { Logo } from "../../UI/Logo";
import Image from "next/image";
import { MobileNavModal } from "./MobileNavModal";
import { DesktopNavList } from "./DesktopNavList";
import { GradientButton } from "../../UI/GradientButton";

export const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  const handleToggleNav = () => setNavOpen(!navOpen);
  return (
    <>
      <header className="absolute top-0 left-0 bg-white w-full  z-40">
        <div className="container-wide flex justify-between items-center py-[22px] lg:py-[18px] ">
          <Logo type="dark" />
          <DesktopNavList />
          <div className="hidden lg:block">
            <GradientButton>Request Invite</GradientButton>
          </div>
          <div className="lg:hidden cursor-pointer" onClick={handleToggleNav}>
            {navOpen ? (
              <Image
                src="/images/icon-close.svg"
                width={18}
                height={19}
                alt="close icon "
              />
            ) : (
              <Image
                src="/images/icon-hamburger.svg"
                width={24}
                height={11}
                alt="hamburger icon to open menu"
              />
            )}
          </div>
        </div>
      </header>
      <MobileNavModal open={navOpen} toggleNav={handleToggleNav} />
    </>
  );
};
