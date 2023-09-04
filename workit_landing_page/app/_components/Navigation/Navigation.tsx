"use client";
import React, { useEffect } from "react";
import { Logo } from "../UI/Logo";
import { ButtonLink } from "../UI/ButtonLink";
import {
  changeTheme,
  selectNavigationState,
} from "@/redux/slices/navigation.slice";
import { useDispatch, useSelector } from "react-redux";

export const Navigation = () => {
  const dispatch = useDispatch();
  const { dark } = useSelector(selectNavigationState);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      if (window.scrollY > 500) {
        dispatch(changeTheme(true));
      }
      if (window.scrollY < 500) {
        dispatch(changeTheme(false));
      }
    });
  }, [dispatch]);
  return (
    <div className="fixed w-full z-40">
      <nav className="pt-[32px] flex  max-w-[1110px] mx-auto justify-between padding-x">
        <Logo type={dark ? "dark" : "light"} />
        <ButtonLink dark={dark}>Apply for access</ButtonLink>
      </nav>
    </div>
  );
};
