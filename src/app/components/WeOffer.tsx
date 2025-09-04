import Link from "next/link";
import React from "react";
import Image from "next/image";

const WeOffer = () => {
  const browse = [
    {
      id: 1,
      src: "/party.jpg",
      title: "Events",
      name: "In the new era of technology we look in the future with certainty for life.",
      link: "Explore Menu",
    },
    {
      id: 2,
      src: "/snacks.png",
      title: "Caterings",
      name: "In the new era of technology we look in the future with certainty for life.",
      link: "Explore Menu",
    },
    {
      id: 3,
      src: "/birthday.jpg",
      title: "Birthdays",
      name: "In the new era of technology we look in the future with certainty for life.",
      link: "Explore Menu",
    },
    {
      id: 4,
      src: "/wedding.png",
      title: "Weddings",
      name: "In the new era of technology we look in the future with certainty for life.",
      link: "Explore Menu",
    },
  ];

  return (
    <div className="pb-20 h-auto pt-20 max-sm:px-4 px-20 ">
      <h1 className="text-4xl">We also offer unique <br /> services for your events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-20">
        {browse.map((item) => (
          <div
            key={item.id}
            className="w-full h-100 justify-center text-left flex flex-col gap-2 rounded-lg overflow-hidden"
          >
            <div className="w-full">
              <Image
                src={item.src}
                width={100}
                height={100}
                alt={item.title}
                className="w-full h-70 object-cover -mt-8 rounded-lg"
              />
            </div>
            <h1 className="font-semibold pt-4">{item.title}</h1>
            <p className="leading-5 text-gray-500 text-sm">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeOffer;
