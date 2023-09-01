import React from "react";
interface IButton {
  children: React.ReactNode;
}
export const Button: React.FC<IButton> = ({ children }) => {
  return (
    <a className="text-button text-dark-purple bg-eucaplyptus px-[24px] py-[12px] hover:bg-transparent hover:text-eucaplyptus border-2 border-eucaplyptus duration-300 cursor-pointer">
      {children}
    </a>
  );
};
