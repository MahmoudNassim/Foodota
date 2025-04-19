import React from "react";
import span from "../../assets/images/span.png";
import team1 from "../../assets/images/team1.png";
import team2 from "../../assets/images/team2.png";
import team3 from "../../assets/images/team3.png";
import team4 from "../../assets/images/team4.png";

export default function TeamMember() {
  return (
    <div className="w-full  max-w-7xl mx-auto container min-md:p-10 ">
      <div className="flex flex-col gap-1.5 w-full">
        <p className="text-center text-[16px] text-warning font-bold">
          Team Members
        </p>
        <h3 className="text-center text-[42px] font-bold">
          Meet Our Best Team
        </h3>
        <div className="flex justify-center">
          <img src={span} alt="" />
        </div>
      </div>
      <div className="grid max-md:grid-cols-1 grid-cols-2  min-xl:grid-cols-4 min-xl:gap-20 max-lg:gap-x-10  max-xl:gap-y-0 justify-center">
        <div className="card mt-20 cursor-pointer bg-[#F3F3F3] hover:bg-white w-[350px] min-xl:w-[300px] shadow-sm hover:text-warning mx-auto ">
          <figure>
            <img src={team1} className="object-cover w-[336px]" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-[24px] leading-[29px] font-semibold  ">
              Alizeh Anderson
            </h2>
            <p
              className="text-[16px] leading-[29px] font-normal text-gray-400 "
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              Senior Chef
            </p>
          </div>
        </div>
        <div className="card mt-20 cursor-pointer bg-[#F3F3F3] hover:bg-white w-[350px] min-xl:w-[300px] shadow-sm hover:text-warning mx-auto ">
          <figure>
            <img src={team2} className="object-cover w-[336px]" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-[24px] leading-[29px] font-semibold  ">
              Angelina John Doe{" "}
            </h2>
            <p
              className="text-[16px] leading-[29px] font-normal text-gray-400 "
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              Master Chef
            </p>
          </div>
        </div>
        <div className="card mt-20 cursor-pointer bg-[#F3F3F3] hover:bg-white w-[350px] min-xl:w-[300px] shadow-sm hover:text-warning mx-auto ">
          <figure>
            <img src={team3} className="object-cover w-[336px]" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-[24px] leading-[29px] font-semibold  ">
              Andre Smith
            </h2>
            <p
              className="text-[16px] leading-[29px] font-normal text-gray-400 "
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              Professor
            </p>
          </div>
        </div>
        <div className="card mt-20 cursor-pointer bg-[#F3F3F3] hover:bg-white w-[350px] min-xl:w-[300px] shadow-sm hover:text-warning mx-auto ">
          <figure>
            <img src={team4} className="object-cover w-[336px]" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-[24px] leading-[29px] font-semibold  ">
              Christina Chi
            </h2>
            <p
              className="text-[16px] leading-[29px] font-normal text-gray-400 "
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              Psychologist
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
