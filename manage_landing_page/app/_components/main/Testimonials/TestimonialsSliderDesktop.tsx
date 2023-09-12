"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/constants";
import { TestimonialCard } from "../../cards/TestimonialCard";
export const TestimonialsSliderDesktop = () => {
  const [carouselWidth, setCarouselWidt] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!carouselRef.current) return;

    const carouselSW = carouselRef.current.scrollWidth;
    const carouselOW = carouselRef.current.offsetWidth;
    setCarouselWidt(carouselSW - carouselOW);
  }, []);
  return (
    <motion.div
      ref={carouselRef}
      className="w-full max-w-[1680px] mx-auto overflow-hidden pt-[100px] cursor-grab hidden lg:block"
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 125, left: -carouselWidth }}
        initial={{ translateX: "-125px" }}
        className="flex gap-[30px]"
      >
        {testimonials.map((testimonial) => {
          return (
            <TestimonialCard cardData={testimonial} key={testimonial._id} />
          );
        })}
      </motion.div>
    </motion.div>
  );
};
