import Image from "next/image";
import React from "react";

export const YourResult = () => {
  return (
    <div className="relative container-wide  flex flex-col items-center md:flex-row gap-[48px] md:gap-[78px] xl:gap-[131px]  md:ml-[-110px] xl:ml-0 ">
      <Image
        src="\images\pattern-curved-line-left.svg"
        width={85}
        height={200}
        alt="decorative curve line"
        className="hidden xl:block absolute right-[27px] top-[-50px] "
      />
      <Image
        src="/images/image-man-eating.webp"
        width={565}
        height={533}
        alt="man eating , decorative purpose"
        className="flex-1 h-[355px] w-full max-w-[375px] md:max-w-[435px] md:h-[411px] xl:max-w-[564px] xl:h-[533px] "
      />

      <div className="flex-1 max-md:padding-x xl:pt-[150px]">
        <h1 className="gunmetal text-headingLMobile xl:text-headingL mb-[32px] xl:mb-[35px]">
          What your BMI result means
        </h1>
        <p className="text-bodyM">
          A BMI range of 18.5 to 24.9 is considered a {"'"}healthy weight.{"'"}
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </div>
  );
};
