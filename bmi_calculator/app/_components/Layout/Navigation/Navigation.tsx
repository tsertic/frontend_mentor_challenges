import Image from "next/image";
import React from "react";

export const Navigation = () => {
  return (
    <header className="absolute w-full top-[32px] xl:top-[74px]">
      <nav className="container-wide flex justify-center xl:justify-start">
        <Image
          src="/images/logo.svg"
          width={64}
          height={64}
          alt="logo"
          className="max-xl:w-[40px] max-xl:h-[40px]"
        />
      </nav>
    </header>
  );
};
