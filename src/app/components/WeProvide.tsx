import React from "react";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const WeProvide = () => {
  return (
    <div className="lg:h-screen bg-[#dbdfd058] max-sm:pb-10 px-20 max-sm:px-4 pt-28 ">
      <div className="lg:flex">
        <div className="lg:w-[40%]">
          <Image
            src="/jollof.jpg"
            width={500}
            height={500}
            alt="We Provide Image"
            className="h-[70vh] max-sm:h-[60vh] rounded-xl object-cover"
          />
          <div className="flex flex-col lg:float-right gap-4 bg-[#474747] h-60 w-80 rounded-xl -mt-48 -mr-10 relative z-0 text-[#dbdfd0f6] p-10">
            <p className="font-bold">Come Visit Us</p>
            <div className="flex text-sm">
              <Phone />
              <p className="pl-4"> 08036583620</p>
            </div>
            <div className="flex text-sm">
              <Mail />
              <p className="pl-4">@gmail.com</p>
            </div>
            <div className="flex text-sm">
              <MapPin />
              <p className="pl-4">Coming soon</p>
            </div>
          </div>
        </div>
        <div className="lg:w-[40%] mt-12 lg:ml-28 flex flex-col gap-4">
        <h1 className="text-4xl">We provide healthy food for your family.</h1>
        <p>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
        <p className="text-sm">At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
        <div>
        <button className="mt-4 border-2 border-black py-1.5 px-4 rounded-3xl text-sm">More About Us</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default WeProvide;
