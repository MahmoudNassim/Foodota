import React from "react";
import HomePage from "./pages/HomePage";
import "animate.css";
import Blog from "./pages/Blog";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="w-full h-[100vh] ">
      <Header />
      {/* <HomePage /> */}
      <Blog />
      <Footer />
    </div>
  );
}
