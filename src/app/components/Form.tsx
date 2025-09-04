"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Form = () => {
  const [state, handleSubmit] = useForm("mkgjkbqr");
  if (state.succeeded) {
    return <p className="mt-26 text-amber-400 text-3xl">Thanks for joining!</p>;
  }

  return (
    <div
      id="register"
      className="w-full max-sm:px-10 max-sm:h-[60vh] h-auto pb-20 mt-12 text-font bg-white rounded-2xl shadow-md"
    >
      <div className="w-full pt-8">
        <form onSubmit={handleSubmit} className="w-80 max-sm:w-full lg:mx-6 ">
          <div className="flex">
            <div>
              <p>Name</p>
              <input
                placeholder="Enter Your Name:"
                id="name"
                type="text"
                name="name"
                className="w-60 bg-transparent text-[16px] max-sm:text-xl max-sm:pb-2 max-sm:w-full border outline-none hover:border-[#231f20] p-3 pl-4 rounded-4xl border-black text-black mt-2"
              />
            </div>
            <div>
              <p>Email</p>
              <input
                placeholder="Email:"
                id="email"
                type="email"
                name="email"
                className="w-60 bg-transparent text-[16px] max-sm:text-xl max-sm:pb-2 max-sm:w-full border outline-none hover:border-[#231f20] p-3 pl-4 rounded-4xl border-black text-black mt-2 ml-4"
              />
            </div>
          </div>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <div className="mt-4">
            <p>Message</p>
          <input
            type="text"
            placeholder="Message:"
            id="message"
            name="message"
            className="w-full bg-transparent text-[16px] max-sm:text-xl max-sm:pb-2 max-sm:w-full border outline-none hover:border-[#231f20] p-3 pl-4 rounded-4xl border-black text-black mt-2 -pt-10 h-32"
          />
          </div>
          <button
            className="bg-[#AD343E] hover:bg-black hover:border-2 border-[#ffed00] duration-300 w-124 rounded cursor-pointer uppercase hover:text-[#ffed00] py-4 text-black mt-10"
            type="submit"
            disabled={state.submitting}
          >
            register now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
