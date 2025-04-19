import React from "react";
import drink from "../../assets/images/drink.jpg";
import organic from "../../assets/images/organic.jpg";
import { FaMapMarkedAlt } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="w-full">
      <div
        className="bg-center h-[450px] bg-cover bg-no-repeat max-md:bg-contain max-md:bg-white  flex flex-col w-full"
        style={{ backgroundImage: `url(${drink})` }}
      ></div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto container min-md:p-10 ">
          <div className="flex items-center  max-md:p-3 gap-3.5">
            <div className="w-[170px]  overflow-hidden max-md:hidden">
              <img className="object-cover" src={organic} alt="" />
            </div>
            <div className="flex flex-col gap-2.5">
              <figure>
                <div className="rating  ">
                  <div
                    className="mask mask-star bg-gray-400"
                    aria-label="1 star"
                  ></div>
                  <div
                    className="mask mask-star bg-gray-400"
                    aria-label="2 star"
                  ></div>
                  <div
                    className="mask mask-star bg-gray-400"
                    aria-label="3 star"
                    aria-current="true"
                  ></div>
                  <div
                    className="mask mask-star bg-gray-400"
                    aria-label="4 star"
                    aria-current="true"
                  ></div>
                  <div
                    className="mask mask-star bg-white"
                    aria-label="5 star"
                    aria-current="true"
                  ></div>
                </div>
              </figure>
              <h1 className="text-[32px] font-bold leading-[38px]">
                Organic Arcadian Food
              </h1>
              <div className="flex items-center gap-3">
                <FaMapMarkedAlt className="text-2xl" />
                <p className="text-[16px] font-normal leading-[28px] text-gray-400">
                  Main Boulevard, Lahore, Punjab, 54000, Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
