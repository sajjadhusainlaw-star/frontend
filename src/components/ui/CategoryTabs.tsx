"use client";
import { useState } from "react";
const categories = ["All", "Supreme Court", "High Court", "Law Schools", "Law Firms"];
interface CategoryTabsProps {
  onSelect?: (category: string) => void;
}
export default function CategoryTabs({ onSelect }: CategoryTabsProps) {
  const [active, setActive] = useState("All");
  const handleSelect = (category: string) => {
    setActive(category);
    if (onSelect) onSelect(category);
  };
  return (
    <div className="flex flex-wrap gap-3 sm:gap-4 justify-center py-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleSelect(category)}
          className={`px-5 py-2 text-sm sm:text-base font-medium rounded-full border transition-all duration-200
            ${
              active === category
                ? "bg-[#080717] text-white border-[#080717]"
                : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
