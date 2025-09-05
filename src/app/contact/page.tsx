import React from "react";
import Form from "../components/Form";
import Nav from "../components/Nav";

const page = () => {
  return (
    <div>
        <Nav />
    <div className="h-screen pt-18 ">
      <div className="h-[60vh] pt-18 w-full bg-[#dbdfd058] ">
        <div className="px-88">
          <div className="flex flex-col max-sm:px-4 text-center gap-4">
            <h1 className="text-6xl">Contact Us</h1>
            <p>
              We consider all the drivers of change gives you the components you
              need to change to create a truly happens.
            </p>
          </div>
          <Form />
        </div>
      </div>
      </div>
    </div>
  );
};

export default page;
