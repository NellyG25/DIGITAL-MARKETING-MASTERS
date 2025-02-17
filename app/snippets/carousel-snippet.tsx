"use client";

import {Carousel} from "@/components/ui/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "Builds Instant Trust With Google My Business Plaque",
      button: "Boost My Sales Now!",
      src: "/images/12.png",
    },
    {
      title: "",
      button: "Attracts More Customers",
      src: "/images/19.avif",
    },
    {
      title: "",
      button: "Builds Instant Credibility",
      src: "/images/21.webp",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
