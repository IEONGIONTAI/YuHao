import React from "react";

export default function Brand({ name, slogan }) {
  return (
    <div className="animate-fade">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight  sm:text-6xl">
            {name}
            <br />
            {slogan}
          </h2>
        </div>
      </div>
    </div>
  );
}
