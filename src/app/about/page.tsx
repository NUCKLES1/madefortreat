import React from "react";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const page = () => {
  return (
    <div>
      <div className=" bg-[#dbdfd058] pt-28">
        <div className="flex px-30">
          <div className="w-[40%]">
            <Image
              src="/birthday.jpg"
              width={500}
              height={500}
              alt="We Provide Image"
              className="h-[70vh] rounded-xl object-cover"
            />
            <div className="flex flex-col float-right gap-4 bg-[#474747] h-60 w-80 rounded-xl -mt-48 -mr-10 relative z-0 text-[#dbdfd0f6] p-10">
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
          <div className="w-[40%] mt-12 ml-28 flex flex-col gap-4">
            <h1 className="text-4xl">
              We provide healthy food for your family.
            </h1>
            <p>
              Our story began with a vision to create a unique dining experience
              that merges fine dining, exceptional service, and a vibrant
              ambiance. Rooted in city's rich culinary culture, we aim to honor
              our local roots while infusing a global palate.
            </p>
            <p className="text-sm">
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>
          </div>
        </div>
        <div className="flex pt-30 px-30">
          <div className="w-[40%] ml-28 flex flex-col gap-4">
            <h1 className="text-4xl">
              A little information for our valuable guest
            </h1>
            <p className="text-sm">
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>
            <div className="grid grid-cols-2 gap-2">
            <div className="bg-white rounded-xl text-center h-50 pt-16">
             <p><span className="text-4xl">2020</span><br />Foundation</p>
            </div>
            <div className="bg-white rounded-xl text-center h-50 pt-16">
             <p><span className="text-4xl">65+</span><br />Members</p>
            </div>
            <div className="bg-white rounded-xl text-center h-50 pt-16">
             <p><span className="text-4xl">100%</span><br />Satisfied Customers</p>
            </div>
            </div>
          </div>
          <div className="w-[40%] ml-6">
            <Image
              src="/birthday.jpg"
              width={500}
              height={500}
              alt="We Provide Image"
              className="h-[90vh] rounded-xl object-cover"
            />
          </div>
        </div>
        <Testimonials />
        
      </div>
      <Footer />
    </div>
  );
};

export default page;
