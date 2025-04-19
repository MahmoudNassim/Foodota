import React, { useState } from "react";
import span from "../../assets/images/span.png";
import cakeh from "../../assets/images/cakeh.jpg";
import sushi from "../../assets/images/sushi.jpg";
import breakfast from "../../assets/images/breakfast.jpg";
import wrap from "../../assets/images/wrap.jpg";
import none from "../../assets/images/none.png";

export default function NewArrival() {
  const [newarrival] = useState([
    {
      img: cakeh,
      sort: "Appetizers",
      name: "Amazing Decadent Pecan PIE Best Cake",
      details:
        "Pie is a rich chewy, nutty, sweet holiday staple. For many the holidays aren’t the holidays without must explain all this  of denouncing pleasure and praising pain was born and…",
    },
    {
      img: wrap,
      sort: "Appetizers",
      name: "Vegetable & Chicken Wrap For Lunch",
      details:
        "I love a good salad for lunchand Pakistan posted dinner.And I have them often. But I also love my carbs. So a little while back,qui dolorem ipsum quia dolor sit…",
    },
    {
      img: sushi,
      sort: "Sushi",
      name: "Black Special hot Suchi with Salad Serving",
      details:
        "I always love a little sweet andcreamy salty taste at parties and this Brie has just that! Baked brie is an appetizer that will wow the entire party. Sed ut perspiciatis…",
    },
    {
      img: breakfast,
      sort: "Appetizers",
      name: "Best Ever Healthy Breakfast Everyday",
      details:
        "Impress your family with this beautiful cut of meat! When making this prime rib add healthy ingredients in your breakfast and stay active. Hope you’ll enjoy this cooked breakfast. Sed ut…",
    },
  ]);
  return (
    <div className="w-full mt-20 bg-[#F2F2F2] pb-3 ">
      <div className="max-w-7xl flex flex-col gap-5 mx-auto container min-md:p-10">
        <div className="flex flex-col gap-1.5 mt-7 w-full">
          <p className="text-center text-[16px] text-warning font-bold">
            New Arivals
          </p>
          <h3 className="text-center text-[42px] font-bold">
            Latest Tips And Tricks
          </h3>
          <div className="flex justify-center">
            <img src={span} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {newarrival.map((el, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-2xl p-3 gap-4"
            >
              <div className="rounded-2xl overflow-hidden">
                <img src={el.img} alt="" />
              </div>

              <div className="flex flex-col gap-3 flex-grow">
                <p className="text-[15px] font-bold leading-[23px] text-warning font-nunito">
                  {el.sort}
                </p>
                <p className="cursor-pointer font-semibold leading-[29px] text-[24px]">
                  {el.name}
                </p>
                <p className="font-normal leading-[29px] text-[16px] text-gray-500">
                  {el.details}
                </p>
                <div className="flex gap-4 items-center mt-auto pt-4">
                  <div className="w-[60px] h-[60px] overflow-hidden rounded-2xl">
                    <img
                      className="object-cover w-full h-full"
                      src={none}
                      alt="admin"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[14px] leading-[20px] font-normal font-nunito">
                      Admin
                    </p>
                    <p className="text-[14px] leading-[20px] font-normal text-gray-600 font-nunito">
                      March 22, 2021
                    </p>
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
