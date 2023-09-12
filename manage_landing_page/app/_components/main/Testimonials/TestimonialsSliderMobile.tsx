"use client";
import { testimonials } from "@/constants";
import React, { useEffect, useState } from "react";
import { TestimonialCard } from "../../cards/TestimonialCard";
import { useSwipeable } from "react-swipeable";
export const TestimonialsSliderMobile = () => {
  const [currTest, setCurrTest] = useState(0);
  const [offsetTest, setOffsetTest] = useState(0);
  useEffect(() => {
    setOffsetTest(() => currTest * 105);
    console.log(offsetTest);
  }, [currTest]);

  //react-swpeable logic
  const handlerSwipe = useSwipeable({
    onSwipeStart: (e) => {
      if (e.dir === "Right") {
        if (currTest !== 0) setCurrTest(currTest - 1);
      }
      if (e.dir === "Left") {
        if (currTest < testimonials.length - 1) setCurrTest(currTest + 1);
      }
    },
  });
  return (
    <div className="w-full lg:hidden pt-[94px] px-[18px] overflow-hidden">
      <div
        {...handlerSwipe}
        style={{ transform: `translateX(-${offsetTest}%)` }}
        className={`flex  w-full gap-[20px]  translate-x-0 transition-transform duration-300`}
      >
        {testimonials.map((testimonial) => {
          return (
            <div className="min-w-full" key={testimonial._id}>
              <TestimonialCard cardData={testimonial} />
            </div>
          );
        })}
      </div>
      <div className="flex mt-[20px] gap-[10px] justify-center w-full">
        {testimonials.map((testimonials, i) => {
          return (
            <span
              key={testimonials._id}
              className={`w-[7px] h-[7px] border-[1px] border-primary ${
                currTest === i && "bg-primary"
              } rounded-full`}
              onClick={() => setCurrTest(() => i)}
            ></span>
          );
        })}
      </div>
    </div>
  );
};
