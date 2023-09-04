import React from "react";
interface IButton {
  children: React.ReactNode;
  dark: boolean;
}
export const ButtonLink: React.FC<IButton> = ({ children, dark }) => {
  return (
    <a
      className={`border-b-2 border-eucaplyptus ${
        dark ? "text-dark-purple" : "text-white"
      } hover:text-eucaplyptus cursor-pointer duration-300`}
    >
      {children}
    </a>
  );
};
