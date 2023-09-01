import React from "react";
interface IButton {
  children: React.ReactNode;
}
export const ButtonLink: React.FC<IButton> = ({ children }) => {
  return <a className="">{children}</a>;
};
