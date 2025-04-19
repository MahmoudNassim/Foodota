import React, { useState } from "react";
import span from "../../assets/images/span.png";
import tea from "../../assets/images/oreo-shake-150x150.jpg";
export default function RestarauntCategories() {
  const [readMore, setReadMore] = useState(false);

  const shortText =
    "Oreo Milkshake Recipe - A super easy milkshake made with vanilla ice cream...";
  const fullText =
    "Oreo Milkshake Recipe - A super easy milkshake made with vanilla ice cream, milk, and Oreo cookies! This sweet treat is a hit with the whole family on a hot";
  return (
    <div className="col-span-9 max-lg:mt-3.5 max-lg:col-span-12 bg-white rounded-[10px] p-5 flex flex-col gap-3">
      <p className="text-[20px] leading-[24px] font-bold">Categories</p>
      <div>
        <img src={span} alt="" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="relative w-full">
          <h3 className="text-[20px] leading-[24px] font-semibold relative z-10">
            Shakes (10)
          </h3>
          <span className="absolute top-[46px] left-0 w-[60px] h-[2px] border-t-[3px] border-[#FFCC00] z-10 content-['']"></span>
          <span className="absolute top-[46px] left-0 w-full h-[2px] border-b-[3px] border-[#f3f5ff] content-['']"></span>
        </div>

        <div className="flex gap-3 mt-10">
          <div>
            <img src={tea} alt="" />
          </div>
          <div className="flex flex-col flex-1 justify-between">
            <h3 className="text-[18px] font-bold leading-[20px]">
              Oreo Milk Shake
            </h3>
            <p className="text-[16px] font-normal leading-[24px] text-gray-400">
              {readMore ? fullText : shortText}
              <span
                onClick={() => setReadMore(!readMore)}
                className="text-warning cursor-pointer ml-1"
              >
                {readMore ? "Read less" : "Read more"}
              </span>
            </p>
            <p className="text-[20px] font-bold leading-[30px]">£ 290.00</p>
            <div className="flex items-center gap-2 mt-4">
              <input
                type="number"
                className="w-[50px] h-[30px]  rounded border border-gray-300 px-1"
              />
              <button className="btn btn-warning text-black hover:bg-black hover:text-white transition-all duration-[400ms] px-3 py-1 max-md:w-[100px] max-md:h-[40px]">
                Order Food
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
