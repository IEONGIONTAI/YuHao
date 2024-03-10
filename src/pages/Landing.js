import React, { useRef } from "react";
import Header from "../components/header";
import Brand from "../components/brand";
import Selector from "../components/selector";
import FoodCarousel from "../components/foodCarousel";
import AboutUs from "../components/aboutUs";
import Location from "../components/location";
import LocationItem from "../components/locationItem";
import Footer from "../components/footer";

export default function Landing() {
  const aboutUsRef = useRef(null);
  const locationItemRef = useRef(null);

  const handleScroll = (name) => {
    if (name === "關於我們")
      aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
    else if (name === "聯絡信息")
      locationItemRef.current.scrollIntoView({ behavior: "smooth" });
    else console.log("no such section found.");
  };

  return (
    <>
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://resumedata01.s3.ap-northeast-1.amazonaws.com/%E6%8E%9B%E7%88%90%E7%83%A4%E9%B4%A81.jpg)",
        }}
      >
        <Header onClick={handleScroll} />
        <Brand />
      </div>

      <div ref={aboutUsRef}>
        <AboutUs />
      </div>
      <FoodCarousel />
      <div ref={locationItemRef}>
        <LocationItem />
      </div>

      <Footer />
    </>
  );
}
