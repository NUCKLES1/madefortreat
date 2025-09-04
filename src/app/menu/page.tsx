"use client";

import React, { useState } from "react";
import Footer from "../components/Footer";
import Image from "next/image";

// Example categories and products
const categories = ["All", "Rice", "Swallow", "Pastries"];
const products = [
  {
    id: 1,
    name: "Semo and vegetable soup",
    src: "/semo.jpg",
    category: "Swallow",
  },
  {
    id: 2,
    name: "Fried Rice",
    src: "/fried-rice.jpg",
    category: "Rice",
  },
  { id: 3, name: "Jollof Rice", src: "/jollo.jpg", category: "Rice" },
  { id: 4, name: "PuffPuff", src: "/puffpuff.jpg", category: "Pastries" },
  {
    id: 5,
    name: "Small chops",
    src: "/small.jpg",
    category: "Pastries",
  },
  {
    id: 6,
    name: "Eba and okro soup",
    src: "/eba.jpg",
    category: "Swallow",
  },
  {
    id: 7,
    name: "Amala and soup",
    src: "/amala.jpg",
    category: "Swallow",
  },
  {
    id: 8,
    name: "Meat pie",
    src: "/meatpie.jpg",
    category: "Pastries",
  },
  {
    id: 9,
    name: "Ofada rice",
    src: "/ofada.jpg",
    category: "Rice",
  },
  {
    id: 10,
    name: "Egg roll",
    src: "/eggroll.jpg",
    category: "Pastries",
  },
  {
    id: 11,
    name: "Fufu and Egusi soup",
    src: "/fufu.jpg",
    category: "Swallow",
  },
  {
    id: 12,
    name: "Rice and stew",
    src: "/rice.png",
    category: "Rice",
  },
];

const Menu = () => {
  const [activeTab, setActiveTab] = useState("All");

  // Filter products by category
  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((product) => product.category === activeTab);

  return (
    <div>
      <div className="pt-30 px-20 max-sm:px-4">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-6xl">Our menu</h1>
          <p>
            We consider all the drivers of change gives you the components you{" "}
            <br />
            need to change to create a truly happens.
          </p>
        </div>
        {/* Tab Section */}
        <div className="mt-18 pb-20">
          <div className="flex gap-4 mb-6 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-3xl ${
                  activeTab === category
                    ? "bg-[#DBDFD0] font-bold"
                    : "bg-gray-100 text-black"
                }`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            ))}
          </div>
          {/* Products for active tab */}
          <div className="grid grid-cols-1 md:grid-cols-2 max-sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border p-4 rounded-4xl max-sm:rounded-2xl shadow-sm bg-white h-100 max-sm:h-78"
              >
                <Image
                  src={product.src ?? "/default-image.jpg"}
                  alt=""
                  width={500}
                  height={500}
                  className="rounded-xl h-70 max-sm:h-50 object-fill"
                />
                <h2 className="text-lg font-semibold pt-4">{product.name}</h2>
                <p className="text-sm text-gray-500">{product.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
