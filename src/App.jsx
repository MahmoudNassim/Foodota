import React from "react";
import HomePage from "./pages/HomePage";
import "animate.css";
import Blog from "./pages/Blog";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllVendors from "./pages/AllVendors";
import { IoIosArrowUp } from "react-icons/io";
import ResturauntPage from "./pages/RestarauntPage";

export default function App() {
  return (
    <div className="w-full min-h-screen ">
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed w-[50px] h-[50px] bg-amber-400 bottom-7 right-7 flex justify-center items-center cursor-pointer hover:text-white hover:bg-black transition-all duration-[400ms]"
      >
        <IoIosArrowUp />
      </div>
      <Header />
      {/* <HomePage /> */}
      {/* <Blog /> */}
      {/* <AllVendors /> */}
      <ResturauntPage />
      <Footer />
    </div>
  );
}
