"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Coffee } from "lucide-react";
import { Soup } from 'lucide-react';
import { GlassWater } from 'lucide-react';
import { CakeSlice } from 'lucide-react';

const Browse = () => {
  const browse = [
    {
      id: 1,
      src: Coffee,
      title: "Event Meal",
      name: "In the new era of technology we look in the future with certainty and pride for our life.",
      link: "Explore Menu",
      category: "event-meals",
    },
    {
      id: 2,
      src: Soup,
      title: "Pastries",
      name: "In the new era of technology we look in the future with certainty and pride for our life.",
      link: "Explore Menu",
      category: "pastries",
    },
    {
      id: 3,
      src: GlassWater,
      title: "Drinks",
      name: "In the new era of technology we look in the future with certainty and pride for our life.",
      link: "Explore Menu",
      category: "passtries",
    },
    {
      id: 4,
      src: CakeSlice,
      title: "Desserts",
      name: "In the new era of technology we look in the future with certainty and pride for our life.",
      link: "Explore Menu",
      category: "desserts",
    },
  ];

   const router = useRouter();
  const [fadeId, setFadeId] = useState<number | null>(null);

  const handleExploreClick = (id: number, category: string) => {
    setFadeId(id);
    setTimeout(() => {
      router.push(`/menu?category=${category}`);
    }, 350); // Duration matches CSS transition
  };

  return (
    <div className="h-screen pt-28 px-20 max-sm:px-4 text-center">
      <h1 className="text-3xl">Browse our Menu</h1>
      <div className="grid grid-cols-1 max-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-20">
        {browse.map((item) => (
          <div key={item.id}
            className={`w-full h-80 max-sm:h-60 p-6 justify-center items-center flex flex-col gap-2 rounded-lg border border-gray-300 transition-opacity duration-350 ${
              fadeId === item.id ? "opacity-0" : "opacity-100"
            }`}>
            <div className="w-18 h-18 max-sm:w-8 bg-[#dbdfd058] rounded-full flex items-center justify-center">
              <div>
                <item.src className=" w-10 h-10 max-sm:w-6 max-sm:h-6"/>
              </div>
            </div>
            <h1 className="font-semibold pt-4">{item.title}</h1>
            <p className="leading-5 text-gray-500 text-sm max-sm:leading-3.5">{item.name}</p>
            <Link href="/menu" className="lg:pt-6">
              <button className="text-[#AD343E]"  onClick={() => handleExploreClick(item.id, item.category)}>Explore Menu</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;



