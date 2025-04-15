import React from "react";
import HeroSection from "../components/HomePage/HeroSection";
import Menue from "../components/HomePage/Menue";
import PopularResturant from "../components/HomePage/PopularResturant";
import DeliciousDeal from "../components/HomePage/DeliciousDeal";
import SimpleProcess from "../components/HomePage/SimpleProcess";
import GetStarted from "../components/HomePage/GetStarted";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <HeroSection />
      <Menue />
      <PopularResturant />
      <DeliciousDeal />
      <SimpleProcess />
      <GetStarted />
    </div>
  );
}
