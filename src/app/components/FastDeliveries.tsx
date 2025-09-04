import React from "react";
import Image from "next/image";
import {
  Clock,
  ShoppingCart,
  SquarePercent,
} from "lucide-react";

const FastDeliveries = () => {
  return (
    <div className="lg:h-screen max-sm:pb-10 bg-[#dbdfd058] px-30 max-sm:px-4 pt-28 ">
      <div className="lg:flex">
        <div className="lg:w-[50%] flex">
          <div>
            <Image
              src="/fried.jpg"
              width={250}
              height={500}
              alt="We Provide Image"
              className="h-[70vh] max-sm:h-[55vh] rounded-xl object-cover"
            />
          </div>
          <div className="flex flex-col pl-4 gap-4 mt-8">
            <Image
              src="/fried-rice.jpg"
              width={200}
              height={150}
              alt="We Provide Image"
              className="h-60 rounded-xl object-cover"
            />
            <Image
              src="/takeaway.jpg"
              width={200}
              height={150}
              alt="We Provide Image"
              className="h-40 rounded-xl object-cover"
            />
          </div>
        </div>
        <div className="lg:w-[35%] mt-12 lg:ml-10 flex flex-col gap-4">
          <h1 className="text-4xl">Fast Food Deliveries to any Location</h1>
          <p className="text-sm">
            Our visual designer lets you quickly and of drag a down your way to
            customapps for both keep desktop.
          </p>
          <div className="flex flex-col gap-4 mt-8">
            <div className="flex items-center gap-4 font-semibold">
              <div className="w-10 h-10 rounded-full bg-[#AD343E] item-center flex justify-center">
                <Clock className="w-4 text-white mt-2" />
              </div>
              <p>Delivery within 30 minutes</p>
            </div>
            <div className="flex items-center gap-4 font-semibold">
              <div className="w-10 h-10 rounded-full bg-[#AD343E] item-center flex justify-center">
                <SquarePercent className="w-4 text-white mt-2" />
              </div>
              <p>Best Offer & Prices</p>
            </div>
            <div className="flex items-center gap-4 font-semibold">
              <div className="w-10 h-10 rounded-full bg-[#AD343E] item-center flex justify-center">
                <ShoppingCart className="w-4 text-white mt-2" />
              </div>
              <p>Online Services Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastDeliveries;
