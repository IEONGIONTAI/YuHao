import React from "react";
import Header from "../components/header";
import Brand from "../components/brand";
import Selector from "../components/selector";
import FoodCarousel from "../components/foodCarousel";
import AboutUs from "../components/aboutUs";
import Location from "../components/location";
import LocationItem from "../components/locationItem";

export default function Landing() {
  return (
    <>
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://resumedata01.s3.ap-northeast-1.amazonaws.com/%E6%8E%9B%E7%88%90%E7%83%A4%E9%B4%A81.jpg)",
        }}
      >
        <Header />
        <Brand />
      </div>

      <AboutUs />
      <LocationItem />
      <Selector />
    </>
  );
}
