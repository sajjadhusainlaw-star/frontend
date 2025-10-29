import React from "react";
import NewsCard from "../ui/NewsCard";
import Image from "next/image";
import img from "../../../public/stories.jpeg";
import Button from "../ui/Button";

interface StoresProps {
  leftWidth?: string;
  rightWidth?: string;
}
export default function Stores({
  leftWidth = "md:w-[70%]",
  rightWidth = "md:w-[30%]",
}: StoresProps) {
  const items = [
    {
      id: 1,
      title: "Chief Justice of India (CJI) BR Gavai",
      description:
        "Said that his own life stood as proof of how constitutional safeguards transform the marginalised...",
    },
    {
      id: 2,
      title: "Former Attorney General K Parasaran",
      description:
        "Played a stellar role in shaping modern India's legal destiny through dedication to law...",
    },
    {
      id: 3,
      title: "Attorney General R Venkataramani",
      description:
        "Said that former Attorney General Parasaran’s devotion to Lord Ram continues to shape his understanding...",
    },
    {
      id: 4,
      title: "Chief Justice of India (CJI) BR Gavai",
      description:
        "Said that his own life stood as proof of how constitutional safeguards transform the marginalised...",
    },
    {
      id: 5,
      title: "Former Attorney General K Parasaran",
      description:
        "Played a stellar role in shaping modern India's legal destiny through dedication to law...",
    },
    {
      id: 6,
      title: "Attorney General R Venkataramani",
      description:
        "Said that former Attorney General Parasaran’s devotion to Lord Ram continues to shape his understanding...",
    },
  ];
  return (
    <div className="bg-[#f6f6f7]">

      <div className="w-full">
      <div className="border-2 border-dotted border-[#000000] h-14 my-4 flex">
        <div className=" w-40 h-full flex justify-center items-center   bg-[#0A2342]  text-white text-2xl">
          Live News
        </div>
        <div className="flex justify-center items-center px-10">
          <p>
            JP Morgan's Jamie Dimon said he was "far more worried than others"
            about the potential for a stock market correction.
          </p>
        </div>
      </div>
      <div className="container mx-auto  py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl md:text-3xl font-extrabold">
            Today's Top 10 Updates
          </h1>
          <Button
            lable="SN Treads"
            className="bg-gray-50  px-3 py-1 rounded-sm  text-black"
          />
        </div>
        <div className="flex justify-between gap-4 ">
          <div className={` ${leftWidth}`}>
            {" "}
            {/* <NewsScroller items={items}  /> */}
          </div>

          <div
            className={` flex flex-col p-4 bg-white  transition-all duration-300 ${rightWidth}`}
          >
           
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
