import React from "react";
import NewsCard from "../ui/NewsCard";
import Image from "next/image";
import img from "../../../public/stories.jpeg";
import Button from "../ui/Button";

interface StoresProps {
  leftWidth?: string; // custom Tailwind width for left section
  rightWidth?: string; // custom Tailwind width for right section
}

export default function Stores({
  leftWidth = "md:w-[45%]", // 👈 default 60% for large story
  rightWidth = "md:w-[50%]", // 👈 default 38% for smaller cards
}: StoresProps) {
  return (
    <div className="container mx-auto px-4 pb-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl md:text-3xl font-bold">Top Stories</h1>
        <Button
          lable="View All Stories"
          className="bg-gray-50  px-3 py-1 rounded-sm  text-black border-1 border-gray-200 hover:bg-gray-200"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div
          className={`border border-gray-300 rounded-xl flex flex-col p-4 bg-white shadow-sm hover:shadow-md transition-all duration-300 ${leftWidth}`}
        >
          {/* Image wrapper */}
          <div className="relative w-full h-[250px] md:h-[320px] rounded-lg overflow-hidden">
            <Image
              src={img}
              alt="News Thumbnail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>

          {/* Headline */}
          <h3 className="mt-4 font-semibold text-lg md:text-xl line-clamp-2">
            Jobs, travel, national parks — what impact will US shutdown have?
          </h3>

          {/* Description */}
          <p className="mt-2 text-sm md:text-base text-gray-700 line-clamp-3">
            Washington&apos;s political gridlock could inflict wide-ranging
            miseries, as anything deemed non-essential will be put on hold.
          </p>

          <div className="mt-4">
            <Button
              lable="Read Full Story"
              className="bg-black w-full px-3 py-1 rounded-sm  text-white"
            />
          </div>
        </div>

        {/* 🔹 Right: News List */}
        <div className={`flex-1 ${rightWidth}`}>
          <div className="flex flex-col gap-4">
            {[1, 2, 3].map((i: number) => (
              <NewsCard
                key={i}
                title="Supreme Court Half Yearly Digest 2025: Family Law"
                court="Supreme Court"
                time={i * 5}
                veiws={`${i * 1.5}k Views`}
                likes={`${i * 500}`}
               
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
