import React, { useRef } from "react";
import Header from "../components/header";
import Brand from "../components/brand";
import FoodCarousel from "../components/foodCarousel";
import AboutUs from "../components/aboutUs";
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
            "url(https://resumedata01.s3.ap-northeast-1.amazonaws.com/Golden%2BChina%2BRestaurant3866.jpg)",
        }}
      >
        <Header onClick={handleScroll} />
        <Brand name={"裕濠小館"} slogan={"港式燒臘"} />
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
