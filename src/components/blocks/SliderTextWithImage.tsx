"use client";
import Image from "next/image";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";

const data = [
  {
    name: "slide 3",
    review:
      "I've been working with Vic to improve my balance and strength. Fitness is also something important as my arms are important to help me get around and be independent at home",
    src: "/photos/s.webp",
  },
  {
    name: "slide 1",
    review:
      "I've been working with Victor for a few years now and have built lots of strength. I've also gotten a lot fitter with basketball and have improved my shooting!",
    src: "/photos/b.jpg",
  },
  {
    name: "slide 2",
    review:
      "Victor helps me stay fit and also helps me with my injuries with my knees. He's patient and most important we have fun with our exercise sessions",
    src: "/photos/j.webp",
  },
];

function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div
      className="embla relative w-full bg-white  border-[1px] rounded-xl max-w-[640px] mx-auto"
      ref={emblaRef}
    >
      <div className="embla__container w-full relative">
        {data.map((slide) => (
          <div
            className="embla__slide w-full p-8 h-full flex flex-col gap-4 overflow-hidden relative"
            key={slide.name}
          >
            <div className="w-full text-center">
              <h3>&quot;{slide.review}&quot;</h3>
            </div>
            <div className="relative w-[96px] h-[96px] rounded-[50%] overflow-hidden mx-auto">
              <Image
                src={slide.src}
                alt={slide.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SliderTextWithImage() {
  return (
    <section className=" mx-auto relative flex gap-12 bg-primary section-padding">
      <EmblaCarousel />
    </section>
  );
}
