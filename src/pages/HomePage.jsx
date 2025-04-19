import React from "react";
import HeroSection from "../components/HomePage/HeroSection";
import Menue from "../components/HomePage/Menue";
import PopularResturant from "../components/HomePage/PopularResturant";
import DeliciousDeal from "../components/HomePage/DeliciousDeal";
import SimpleProcess from "../components/HomePage/SimpleProcess";
import GetStarted from "../components/HomePage/GetStarted";
import TeamMember from "../components/HomePage/TeamMember";
import TakeAway from "../components/HomePage/TakeAway";
import NewArrival from "../components/HomePage/NewArrival";
import HomeSlides from "../components/HomePage/HomeSlides";
import Footer from "../components/Footer";
import { IoIosArrowUp } from "react-icons/io";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center relative">
      <HeroSection />
      <Menue />
      <PopularResturant />
      <DeliciousDeal />
      <SimpleProcess />
      <GetStarted />
      <TeamMember />
      <TakeAway />
      <NewArrival />
      <HomeSlides />
      <Footer />
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed w-[50px] h-[50px] bg-amber-400 bottom-7 right-7 flex justify-center items-center cursor-pointer hover:text-white hover:bg-black transition-all duration-[400ms]"
      >
        <IoIosArrowUp />
      </div>
    </div>
  );
}
