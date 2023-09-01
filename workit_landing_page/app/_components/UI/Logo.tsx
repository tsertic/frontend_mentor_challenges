import Image from "next/image";
import React from "react";

export const Logo: React.FC<{ type: "light" | "dark" }> = ({ type }) => {
  const logoSrc =
    type === "light" ? "/images/logo-light.svg" : "/images/logo-dark.svg";
  return (
    <Image src={logoSrc} width={96} height={25} alt="Work It company logo" />
  );
};
