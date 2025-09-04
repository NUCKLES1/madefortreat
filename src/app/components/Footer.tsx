import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="lg:h-[80vh] bg-[#474747]  max-sm:px-4 max-sm:pt-10 px-30 max-sm:pb-20">
      <div className="h-3/5 lg:flex items-center justify-between text-white">
        <div className="lg:max-w-1/4 flex flex-col gap-4">
          <div>
            <h1>Made4treat</h1>
            <p>
              In the new era of technology we look a in the future with
              certainty and pride to for our company and.
            </p>
          </div>
          <div className="flex gap-3">
            <Twitter className="text-white bg-red-400 p-2 rounded-full h-8 w-8" />
            <Facebook className="text-white bg-red-400 p-2 rounded-full h-8 w-8" />
            <Instagram className="text-white bg-red-400 p-2 rounded-full h-8 w-8" />
          </div>
        </div>
        <div className="max-sm:mt-6">
          <p className="font-semibold">Pages</p>
          <ul className="flex flex-col gap-4 pt-4">
            <li>Home</li>
            <li>Menu</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="lg:w-[35%] lg:pt-40">
          <p>Follow us on Instagram</p>
          <div className="grid grid-cols-2 gap-2 pt-6">
            <Image
              src="/small.jpg"
              alt="Hero Image"
              width={500}
              height={300}
              className="w-full h-40 object-cover rounded-xl"
            />
            <Image
              src="/fri.jpg"
              alt="Hero Image"
              width={500}
              height={300}
              className="w-full h-40 object-cover rounded-xl"
            />
            <Image
              src="/take.jpg"
              alt="Hero Image"
              width={500}
              height={300}
              className="w-full h-40 object-cover rounded-xl"
            />
            <Image
              src="/semo.jpg"
              alt="Hero Image"
              width={500}
              height={300}
              className="w-full h-40 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
