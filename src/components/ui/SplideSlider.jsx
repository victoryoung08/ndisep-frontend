"use client";
import React from "react";
import { SplideSlide, Splide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import Image from "next/image";
export default function SplideSlider({ data }) {
  const sliderData = data.data.slider;
  console.log(sliderData);
  const options = {
    gap: "1rem",
  };
  return (
    <Splide className="w-full">
      <SplideTrack options={options}>
        {/* testimonial slide */}
        {sliderData.map((slide) => (
          <SplideSlide className="flex w-full" key={slide.id}>
            <div className="relative w-full h-72 rounded-xl">
              <Image
                src={`http:localhost:1337${slide.image.data.url}`}
                fill
                style={{
                  objectFit: "cover",
                }}
                alt="home exercise physiology liverpool"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-5 w-full">
              <p className="text-lg text-center">{slide.body}</p>
            </div>
          </SplideSlide>
        ))}
      </SplideTrack>
    </Splide>
  );
}
