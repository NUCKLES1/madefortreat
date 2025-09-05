"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
  const pathname = usePathname();
  const [isStyled, setIsStyled] = useState(false);


  return (
    <div>
      <div className="bg-white shadow-md p-4 px-20 flex items-center justify-between fixed w-full z-999 max-sm:hidden">
        <div>
          <h1 className="text-2xl font-bold">Made4treat</h1>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link
                href="/"
                className={`${
                  pathname === "/"
                    ? "bg-[#DBDFD0] px-4 py-1 rounded-3xl"
                    : "text-black"
                }`}
              >
                Home
              </Link>
            </li>
            <li className="">
              {" "}
              <Link
                href="/menu"
                className={`${
                  pathname === "/menu"
                    ? "bg-[#DBDFD0] px-4 py-1 rounded-3xl"
                    : "text-black"
                }`}
              >
                Menu
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="/about"
                className={`${
                  pathname === "/about"
                    ? "bg-[#DBDFD0] px-4 py-1 rounded-3xl"
                    : "text-black"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="/contact"
                className={`${
                  pathname === "/contact"
                    ? "bg-[#DBDFD0] px-4 py-1 rounded-3xl"
                    : "text-black"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <button className="border-black border-2  text-black px-4 py-2 rounded-3xl">
          Book an Order
        </button>
      </div>
     
    </div>
  );
};

export default Navbar;
