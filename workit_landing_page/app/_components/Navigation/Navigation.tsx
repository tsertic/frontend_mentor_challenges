"use client";
import React, { useEffect, useState } from "react";
import { Logo } from "../UI/Logo";
import { ButtonLink } from "../UI/ButtonLink";

export const Navigation = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setClientWindowHeight(window.scrollY);
    });
  }, []);
  return (
    <div className="fixed w-full z-40">
      <nav className="pt-[32px] flex  max-w-[1110px] mx-auto justify-between padding-x">
        <Logo type={clientWindowHeight < 500 ? "light" : "dark"} />
        <ButtonLink>Apply for access</ButtonLink>
      </nav>
    </div>
  );
};
