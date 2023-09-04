import React from "react";
interface IButton {
  children: React.ReactNode;
}
export const ButtonLink: React.FC<IButton> = ({ children }) => {
  return (
    <a className="border-b-2 border-eucaplyptus text-white hover:text-eucaplyptus cursor-pointer duration-300">
      {children}
    </a>
  );
};
