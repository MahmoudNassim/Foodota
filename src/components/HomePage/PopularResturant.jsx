import React, { useState } from "react";
import span from "../../assets/images/span.png";
import { useResturaunt } from "../../store/store";

export default function PopularResturant() {
  const { restaurant } = useResturaunt();
  return (
    <div className="bg-[#F2F2F2] w-full">
      <div className="max-w-7xl mx-auto container min-md:p-10 flex justify-center flex-col items-center ">
        <div className="flex flex-col gap-1.5  w-full">
          <p className="text-center text-[16px] text-warning font-bold">
            Delicious Food in
          </p>
          <h3 className="text-center text-[42px] font-bold">
            Papular Restaurant
          </h3>
          <div className="flex justify-center">
            <img src={span} alt="" />
          </div>
        </div>
        <div className="mt-10 grid max-md:grid-cols-1  max-xl:grid-cols-4  min-xl:grid-cols-6 gap-3.5 w-full ">
          {restaurant.map((el, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-sm min-md:col-span-2 cursor-pointer "
            >
              <figure>
                <div className="relative">
                  <img src={el.cover} />
                  <div className="rating absolute bottom-[10px] left-5 ">
                    <div
                      className="mask mask-star bg-white"
                      aria-label="1 star"
                    ></div>
                    <div
                      className="mask mask-star bg-white"
                      aria-label="2 star"
                    ></div>
                    <div
                      className="mask mask-star bg-white"
                      aria-label="3 star"
                      aria-current="true"
                    ></div>
                    <div
                      className="mask mask-star bg-white"
                      aria-label="4 star"
                      aria-current="true"
                    ></div>
                    <div
                      className="mask mask-star bg-white"
                      aria-label="5 star"
                      aria-current="true"
                    ></div>
                  </div>
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{el.name}</h2>
                <hr className=" border-gray-300 w-full my-2" />
                <div className="flex p-2">
                  <div className="w-[50px]">
                    <img src={el.brand} alt="" />
                  </div>
                  <div className="flex flex-col p-2 justify-center">
                    <p className="text-red-600">{el.date}</p>
                    <p>{el.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
