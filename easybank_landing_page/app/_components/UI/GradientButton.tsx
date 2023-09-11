import React from "react";
interface IGradientButton {
  children: React.ReactNode;
}
export const GradientButton: React.FC<IGradientButton> = ({ children }) => {
  return (
    <button className=" primary-gradient text-primary-content text-[14px] leading-[28px] py-[8px] px-[33px] rounded-[22px] hover:opacity-40 font-bold transition-all duration-200">
      {children}
    </button>
  );
};
