import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import blackLogo from "../assets/images/logoblack.svg";
import { TbMenu3 } from "react-icons/tb";

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 300); // Scroll threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full z-50 transition-all   duration-300 ${
        isFixed
          ? "lg:fixed top-0 left-0 bg-white text-black shadow-lg animate__animated animate__bounceInDown"
          : "static "
      }`}
    >
      <div className="container max-w-7xl mx-auto  flex items-center justify-center max-lg:justify-between gap-8 py-4 px-4">
        <div className="w-[190px]">
          <img src={isFixed ? blackLogo : logo} alt="Logo" />
        </div>

        <div className="max-lg:hidden lg:flex gap-10 text-[16px] leading-24 font-semibold">
          <a className="cursor-pointer">Home Page</a>
          <a className="cursor-pointer">Single Restaurant</a>
          <a className="cursor-pointer">Registration</a>
          <a className="cursor-pointer">Blog</a>
          <a className="cursor-pointer">All Vendors</a>
        </div>

        <button className="max-xl:hidden btn btn-warning p-[26px] text-black text-[20px] mr-[20px]">
          Restaurant Search
        </button>

        <TbMenu3 className="min-xl:hidden mr-[20px] text-3xl cursor-pointer" />
      </div>
    </div>
  );
}
