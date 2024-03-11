import React from "react";
import { Carousel } from "flowbite-react";
import img1 from "../assets/page-0001.jpg";
import img2 from "../assets/page-0002.jpg";

export default function FoodCarousel() {
  return (
    <div className="bg-[#272727] ">
      <h2 className="text-4xl font-bold text-center animate-fade-up py-10 tracking-tight text-white sm:text-6xl">
        最新消息
      </h2>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 animate-fade-up">
        <Carousel slide={false}>
          <img src={img1} className="w-28 md:w-60" alt="..." />
          <img src={img2} className="w-44 md:w-96" />
        </Carousel>
      </div>
    </div>
  );
}
