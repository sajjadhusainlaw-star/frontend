"use client"; // ✅ Correct spelling

import React from "react";
import Image from "next/image";
import logo from "../../../public/home.svg";
import Button from "../ui/Button";

export const Hero = () => {
  return (
    <div className="container mx-auto px-4">
      {/* 🔸 Breaking News Bar */}
      <div className="py-6 flex justify-center">
        <div className="bg-red-600 text-white text-base md:text-md flex items-center justify-center rounded-md w-full max-w-5xl min-h-[50px] text-center px-4">
          <p>
            <span className="font-bold">BREAKING NEWS</span> | Madras High Court
            has rejected the anticipatory bail petition of TVK district
            secretary Satish Kumar.
          </p>
        </div>
      </div>

      {/* 🔸 Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 my-10 px-4 py-10">
        {/* ✅ Left Side Content */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            INDIA’S FIRST AI-DRIVEN LEGAL TECH PLATFORM — STAY LEGALLY UPDATED!
          </h1>

          <p className="mb-4 text-gray-700 max-w-lg">
            Washington's political gridlock could inflict wide-ranging miseries,
            as anything deemed non-essential will be put on hold.
          </p>

          <p className="mb-4 text-gray-700 max-w-lg">
            As anything deemed non-essential will be put on hold.
          </p>

          {/* ⚠️ Typo fix: 'lable' → 'label' */}
          <Button lable="GET STARTED" disabled />
        </div>

        {/* ✅ Right Side Image */}
        <div className="">
          <Image
            src={logo}
            alt="News Thumbnail"
            className="object-cover w-80 h-80
            md:w-96 md:h-96"
          />
        </div>
      </div>
    </div>
  );
};
