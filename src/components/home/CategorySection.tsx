"use client";

import { useState } from "react";

import image1 from "../../../public/stories.jpeg";
import CategoryTabs from "../ui/CategoryTabs";
import CategoryCard from "../ui/CategoryCard";

interface CardData {
  id: number;
  src?: any;
  categoryName: string;
  postCount?: number;
  description?: string;
  date?: string;
}

const cardsData: CardData[] = [
  {
    id: 1,
    src: image1,
    categoryName: "Supreme Court",
    postCount: 10,
    description: "Latest Supreme Court judgments and updates.",
    date: "2025-10-01",
  },
  {
    id: 2,
    src: image1,
    categoryName: "Law Schools",
    postCount: 5,
    description: "Information about top law schools.",
    date: "2025-09-25",
  },
  {
    id: 3,
    categoryName: "High Court",
    postCount: 8,
    description: "High Court rulings and case studies.",
    date: "2025-10-05",
  },
  {
    id: 4,
    categoryName: "Law Firms",
    postCount: 12,
    description: "Top law firms and services.",
    date: "2025-10-08",
  },
  {
    id: 5,
    categoryName: "Supreme Court",
    postCount: 7,
    description: "More Supreme Court news.",
    date: "2025-10-09",
  },
];

export default function CategorySection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCards = cardsData.filter(
    (card) => selectedCategory === "All" || card.categoryName === selectedCategory
  );

  return (
    <div className="container mx-auto px-4 sm:px-8 py-6">
      <h1 className="text-2xl justify-center flex sm:text-3xl font-bold mb-4 text-center sm:text-left">
        Legal News Categories
      </h1>
      <p className="flex justify-center">Stay informed with the most important legal developments and breaking news from courts across the nation.</p>
      <CategoryTabs onSelect={setSelectedCategory} />

      <div className="flex flex-wrap -mx-2 mt-6">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="w-1/2 sm:w-1/4 px-2 mb-4"
          >
            <CategoryCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}
