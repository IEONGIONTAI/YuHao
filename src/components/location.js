import React from "react";

export default function location() {
  return (
    <div className="flex justify-center items-center py-24  h-full w-full bg-[#222222] bg-cover">
      <div className="flex flex-col items-center animate-fade">
        <label htmlFor="search" className="mb-10 text-white text-3xl font-bold">
          店舖地址搜索
        </label>
        <div className="flex md:flex-row flex-col space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative">
            <select
              id="location"
              className="block appearance-none w-56  bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              aria-label="Select location"
            >
              <option>地址1</option>
              {/* Other options */}
            </select>
          </div>
          <div className="relative">
            <select
              id="category"
              className="block appearance-none w-56 bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              aria-label="Select category"
            >
              <option>地址2</option>
              {/* Other options */}
            </select>
          </div>
          <button className="bg-red-500 hover:bg-red-700 w-56 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            搜尋
          </button>
        </div>
      </div>
    </div>
  );
}
