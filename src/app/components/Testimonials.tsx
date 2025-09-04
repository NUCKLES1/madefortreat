import React from "react";
import Image from "next/image";

const Testimonials = () => {
  const browse = [
    {
      id: 1,
      name: "John Doe",
      src: "/hero-image.jpg",
      title: "Best service",
      description: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
      location: "Lagos, Nigeria",
    },
    {
      id: 2,
      name: "John Doe",
      src: "/hero-image.jpg",
      title: "Simply delicious",
      description: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
      location: "Abeokuta, Nigeria",
    },
    {
      id: 3,
      name: "John Doe",
      src: "/hero-image.jpg",
      title: "Quality meals",
      description: "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
      location: "Delta, Nigeria",
    },
  ];

  return (
    <div className="pb-20 h-auto pt-20 max-sm:px-4 px-30 text-center">
      <h1 className="text-4xl">What Our Customers Say</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-20">
        {browse.map((item) => (
          <div
            key={item.id}
            className="w-full h-84 text-left flex flex-col gap-2 rounded-lg overflow-hidden bg-[#dbdfd058] p-8"
          >
            <h1 className="font-semibold pt-4 text-[#AD343E] text-xl ">
              {item.title}
            </h1>
            <p className="leading-5 text-gray-500 text-sm pt-2">{item.description}</p>
            <div className="flex mt-12">
              <Image src={item.src} alt="" className="w-10 h-10 rounded-full" />
              <div className="ml-2">
              <p className="text-[#949C99] pl-2 font-semibold">{item.name}</p>
              <p className="text-[#949C99] pl-2 text-sm">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
