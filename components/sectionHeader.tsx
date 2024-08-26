"use client";
import React from "react";

const SectionHeader = () => {
  return (
    <div className="relative flex h-lvh sm:h-80  xl:h-96  w-full items-center justify-center overflow-hidden ">
      <img
        src="/placeholder.svg"
        className="absolute  w-full object-cover"
      />
      <div className="relative z-10 flex flex-col gap-3 py-5 bg-white/60 p-6 rounded-lg text-center">
        <h1 className="md:text-5xl text-3xl font-bold text-black">
          Bienvenidos a nuestro Ecommerce
        </h1>
        <p className="text-black">
          Hot Picks from the Summer Collection: Embrace the Season in Style!
        </p>
      </div>
    </div>
  );
};

function ArrowUpDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  );
}

export default SectionHeader;
