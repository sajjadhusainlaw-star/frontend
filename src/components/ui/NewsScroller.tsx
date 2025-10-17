"use client";

import React from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectItem } from "../../../src/app/features/dropdownSlice";
interface ScrollerItem {
  id: number;
  title: string;
  description: string;
}

interface Props {
  items: ScrollerItem[];
}

const NewsScroller: React.FC<Props> = ({ items }) => {
  const selectedId = useAppSelector((state) => state.dropdown.selectedId);
  const dispatch = useAppDispatch();

  return (
    <div className="w-full  p-4 bg-white ">
      {/* Scoped scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #d4d4d4;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #caa438;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #b38c2a;
        }

        /* Firefox support */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #caa438 #d4d4d4;
        }
      `}</style>

      <div className="max-h-72 overflow-y-auto custom-scrollbar scroll-smooth rounded-xl pr-2">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => dispatch(selectItem(item.id))}
            className={`cursor-pointer text-black border-b py-3 px-2 transition-all duration-200 ${
              selectedId === item.id
            }`}
          >
            <h3 className="font-black text-[32px]">
              #{item.id} <span className="font-normal text-md" >{item.title}</span>
            </h3>
            
            <p className="text-md text-gray-500 line-clamp-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsScroller;
