"use client";
import React, { useState } from "react";
import { Logo } from "../../UI/Logo";
import Image from "next/image";
import { MobileNavModal } from "./MobileNavModal";
import Link from "next/link";
import { Button } from "../../UI/Button";
import { DesktopNavList } from "./DesktopNavList";

export const Navigation = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const handleToggleMobileNav = () => setOpenMobileNav(!openMobileNav);
  return (
    <>
      <header className="absolute top-[45px] lg:top-[56px] left-0 w-full z-40 text-base-content">
        <div className=" container-wide flex justify-between items-center max-lg:px-[24px]">
          <Link href={"/"} aria-label="homepage link" className="mb-[-5px]">
            <Logo dark={true} />
          </Link>

          <DesktopNavList />
          <div className="hidden lg:block">
            <Button href="/" ariaLabel="link to get started form">
              Get Started
            </Button>
          </div>

          <div className="cursor-pointer lg:hidden">
            <Image
              src="/images/icon-hamburger.svg"
              width={25}
              height={18}
              alt="hamburger icon"
              className={`${openMobileNav ? "hidden" : "block"}`}
              onClick={handleToggleMobileNav}
            />
            <Image
              src="/images/icon-close.svg"
              width={21}
              height={22}
              alt="hamburger icon"
              className={`${openMobileNav ? "block" : "hidden"}`}
              onClick={handleToggleMobileNav}
            />
          </div>
        </div>
      </header>
      <MobileNavModal
        show={openMobileNav}
        closeModal={() => setOpenMobileNav(false)}
      />
    </>
  );
};
