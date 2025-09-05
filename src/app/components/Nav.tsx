"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const pathname = usePathname();
  const [isStyled, setIsStyled] = useState(false);

  const toggleStyle = () => {
    setIsStyled(!isStyled);
  };
  return (
    <div>
      <nav className="justify-between lg:hidden fixed z-30 pt-4 w-full text-black flex bg-white px-4 shadow-md pb-4">
        <div className="pt-1 pl-2 text-black font-bold">
          <h1 className="font-bold">
            Made <span className="text-green-400">4 treat</span>
          </h1>
        </div>
        <div>
          <button
            onClick={toggleStyle}
            className="lg:hidden text-black h-full text-center"
          >
            {!isStyled ? (
              <Menu className="w-6 h-6  transition-all duration-500" />
            ) : (
              <X className="w-6 h-6 transition-all duration-500" />
            )}
          </button>
        </div>

        <div
          style={{
            width: isStyled ? "100%" : "0",
            opacity: isStyled ? "1" : "0",
            transition: "width 0.5s ease-in-out",
            animationDelay: "opacity 0.5s ease-in-out",
          }}
          className="absolute top-[6vh] right-0 bg-white h-screen p-2 w-[0%] z-50 border overflow-hidden item-center"
        >
          <nav>
            <ul className="flex flex-col gap-6 text-center justify-center items-center w-full pt-20">
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
            <div className="flex justify-center pt-20">
              <button className="border-black border-2  text-black px-4 py-2 rounded-3xl">
                Book an Order
              </button>
            </div>
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
