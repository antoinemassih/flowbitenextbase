import React, { FC } from "react";
import { Carousel } from "flowbite-react";

export default function MyCarousel() {
return(
  <MyCarouselComponent></MyCarouselComponent>
)
}

const MyCarouselComponent: FC = function () {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/carousel-1.svg" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/carousel-2.svg" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/carousel-3.svg" />
      </Carousel>
    </div>
  );
};
