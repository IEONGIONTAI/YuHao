import React from "react";
import Header from "../components/header";
import Brand from "../components/brand";
import { useNavigate } from "react-router-dom";
import menu from "../assets/Menu_now.jpg";

export default function Menu() {
  const navigate = useNavigate();

  const handleScroll = (name) => {
    if (name === "關於我們") navigate("/");
    else if (name === "聯絡信息") navigate("/");
    else console.log("no such section found.");
  };

  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://resumedata01.s3.ap-northeast-1.amazonaws.com/Golden%2BChina%2BRestaurant3866.jpg)",
      }}
    >
      <Header onClick={handleScroll} />
      <Brand name={"菜單"} slogan={""} />
      <div className="flex flex-col justify-center items-center">
        <a href={menu} download>
          <button className="border py-4 px-2 rounded mb-4 text-white">
            下載最新菜單
          </button>
        </a>
        <img src={menu} style={{ width: "50%", height: "50%" }}></img>
      </div>
    </div>
  );
}
