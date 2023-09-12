import React from "react";
import { Button } from "../UI/Button";
import { TestimonialsSliderDesktop } from "../main/Testimonials/TestimonialsSliderDesktop";
import { TestimonialsSliderMobile } from "../main/Testimonials/TestimonialsSliderMobile";

export const Testimonials = () => {
  return (
    <div className="w-full">
      <h2 className="text-center text-base-content text-headingM lg:text-headingL ">
        What they’ve said
      </h2>
      <TestimonialsSliderDesktop />
      <TestimonialsSliderMobile />
      <div className="w-full flex justify-center mt-[48px]">
        <Button dark={false} ariaLabel="get started link" href="/">
          Get Started
        </Button>
      </div>
    </div>
  );
};
