import React, { useState } from "react";

import FoodItem from "./fooditem";

export default function Selector() {
  const [selectedTab, setSelectedTab] = useState("bento");

  const tabs = [
    { id: "bento", text: "便當" },
    { id: "friedRice", text: "炒飯/面" },
    { id: "duck", text: "單點肉類" },
    { id: "soup", text: "湯品" },
    { id: "porridge", text: "燴飯/粥類" },
  ];
  return (
    <div className="flex flex-col justify-center items-center bg-[#1d1d1d] py-10">
      <h2 className="text-2xl font-bold my-4">菜單</h2>
      <div className="flex flex-col md:flex-row justify-center  md:items-center space-y-1 md:space-x-10 animate-jump-in flex-wrap ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={` ${
              selectedTab === tab.id ? " text-white" : " text-gray-500 "
            } transition duration-300 ease-in-out`}
            onClick={() => setSelectedTab(tab.id)}
            aria-selected={selectedTab === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
            id={`tab-${tab.id}`}
            role="tab"
          >
            <span className="text-xl">{tab.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
