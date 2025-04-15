import React, { useState } from "react";
import span from "../../assets/images/span.png";
import combo from "../../assets/images/combo.png";

export default function DeliciousDeal() {
  const [deals] = useState([
    {
      img: combo,
      name: "Organic Arcadian Food",
      details:
        "Howdy Special, A well-seasoned, crispy fried chicken fillet slathered with a",
      price: 600,
    },
    {
      img: combo,
      name: "Organic Arcadian Food",
      details:
        "Howdy Special, A well-seasoned, crispy fried chicken fillet slathered with a",
      price: 600,
    },
    {
      img: combo,
      name: "Organic Arcadian Food",
      details:
        "Howdy Special, A well-seasoned, crispy fried chicken fillet slathered with a",
      price: 600,
    },
    {
      img: combo,
      name: "Organic Arcadian Food",
      details:
        "Howdy Special, A well-seasoned, crispy fried chicken fillet slathered with a",
      price: 600,
    },
    {
      img: combo,
      name: "Organic Arcadian Food",
      details:
        "Howdy Special, A well-seasoned, crispy fried chicken fillet slathered with a",
      price: 600,
    },
    {
      img: combo,
      name: "Organic Arcadian Food",
      details:
        "Howdy Special, A well-seasoned, crispy fried chicken fillet slathered with a",
      price: 600,
    },
  ]);
  return (
    <div className="max-w-7xl mx-auto container min-md:p-10 flex justify-center flex-col items-center">
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
      <div className="mt-8 grid max-md:grid-cols-1 max-xl:grid-cols-2 grid-cols-4 gap-5">
        {deals.map((el, index) => (
          <div
            key={index}
            className="card bg-base-100  shadow-sm hover:shadow-2xl cursor-pointer"
          >
            <figure>
              <img src={el.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-[24px] font-semibold leading-9">
                {el.name}
              </h2>
              <p className="text-[16px] font-normal leading-7 text-gray-500">
                {el.details}
              </p>
              <p className="text-[20px] font-semibold leading-9 text-warning">
                $ {el.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
