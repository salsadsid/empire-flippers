import React from "react";
import { AiFillUnlock } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";

const ListingCard = ({ list }) => {
  const {
    listingId,
    title,
    price,
    status,
    monthlyNetProfit,
    monthlyRevenue,
    monetization,
    monthlyMultiple,
    businessCreated,
    description,
    profit,
    revenue,
    traffic,
    thumbnail,
  } = list ? list : {};
  return (
    <div className="max-w-7xl w-full bg-white lg:flex rounded-xl border border-grey-light">
      <div className="m-6 sm:mr-0 h-72 sm:w-72 min-w-72  rounded-xl bg-white  text-gray-700 flex justify-center items-center">
        <img
          src={thumbnail}
          className="h-full w-full object-cover rounded-xl"
        />
      </div>
      <div className="bg-white py-4 px-8 flex flex-col justify-between leading-normal">
        <div className="flex justify-between items-center">
          <div className="mb-8 flex justify-center items-center gap-2">
            <p className="text-md font-bold text-white bg-indigo-500 rounded-md px-4 py-1">
              #{listingId}
            </p>
            <p className="text-gray-600 text-md ">💠 {status}</p>
          </div>
          <div className="mb-8 sm:flex justify-center items-center hidden">
            <button
              type="button"
              className="group border border-yellow-500 bg-yellow-500 text-white rounded-md px-6 py-3 m-2 text-lg flex items-center gap-3 font-semibold transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
            >
              Unlock Listing
              <AiFillUnlock className="group-hover:animate-ping" />
            </button>
            <button
              type="button"
              className="group border border-indigo-500 bg-indigo-500 text-white rounded-md px-6 py-3 m-2 transition flex items-center gap-3 text-lg font-semibold duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            >
              View Listing
              <BsArrowRight className="group-hover:translate-x-1 transition-all" />
            </button>
          </div>
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="grid lg:grid-cols-6 grid-cols-3  gap-5 my-4">
          <div>
            <p className="text-gray-600 whitespace-nowrap">Price</p>
            <p className="text-lg whitespace-nowrap font-semibold">$ {price}</p>
          </div>
          <div>
            <p className="text-gray-600 whitespace-nowrap">
              Monthly Net Profit
            </p>
            <p className="text-lg whitespace-nowrap font-semibold">
              $ {monthlyNetProfit}
            </p>
          </div>
          <div>
            <p className="text-gray-600 whitespace-nowrap">Monthly Revenue</p>
            <p className="text-lg whitespace-nowrap font-semibold">
              $ {monthlyRevenue}
            </p>
          </div>
          <div>
            <p className="text-gray-600 whitespace-nowrap">Monetization</p>
            <p className="text-lg whitespace-nowrap font-semibold">
              {monetization?.categoryName < 10
                ? monetization?.categoryName
                : monetization?.categoryName.slice(0, 11) + "..."}
            </p>
          </div>
          <div>
            <p className="text-gray-600 whitespace-nowrap">Monthly Multiple</p>
            <p className="text-lg whitespace-nowrap font-semibold">
              {monthlyMultiple}
            </p>
          </div>
          <div>
            <p className="text-gray-600 whitespace-nowrap">Business Created</p>
            <p className="text-lg whitespace-nowrap font-semibold">
              {businessCreated}
            </p>
          </div>
        </div>
        <p>
          {description?.split(" ")?.length < 15
            ? description
            : description?.split(" ")?.slice(0, 16).join(" ") + "..."}
        </p>
        <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        <div className="flex sm:justify-start justify-center items-center gap-6 ">
          <p className="text-gray-600 flex sm:flex-row flex-col justify-center items-center gap-2 text-sm">
            <span className="whitespace-nowrap">
              {" "}
              Profit ({profit?.duration} Months){" "}
            </span>
            <span
              className={`flex text-green-400 items-center gap-1 ${
                profit?.growth > 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              {profit?.growth > 0 ? <BiSolidUpArrow /> : <BiSolidDownArrow />}{" "}
              <span className=" font-medium">{profit?.growth}%</span>
            </span>
          </p>
          <p className="text-gray-600 flex sm:flex-row flex-col justify-center items-center gap-2 text-sm">
            <span className="whitespace-nowrap">
              {" "}
              Revenue ({revenue?.duration} Months){" "}
            </span>
            <span
              className={`flex text-green-400 items-center gap-1 ${
                revenue?.growth > 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              {revenue?.growth > 0 ? <BiSolidUpArrow /> : <BiSolidDownArrow />}{" "}
              <span className=" font-medium">{revenue?.growth}%</span>
            </span>
          </p>
          <p className="text-gray-600 flex sm:flex-row flex-col justify-center items-center gap-2 text-sm">
            <span className="whitespace-nowrap">
              {" "}
              Traffic ({traffic?.duration} Months){" "}
            </span>
            <span
              className={`flex text-green-400 items-center gap-1 ${
                traffic?.growth > 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              {traffic?.growth > 0 ? <BiSolidUpArrow /> : <BiSolidDownArrow />}{" "}
              <span className=" font-medium">{traffic?.growth}%</span>
            </span>
          </p>
        </div>
        <div className="mt-2 sm:hidden justify-center items-center flex flex-col">
          <button
            type="button"
            className="group w-full justify-center border border-yellow-500 bg-yellow-500 text-white rounded-md px-6 py-3 m-2 text-lg flex items-center gap-3 font-semibold transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
          >
            Unlock Listing
            <AiFillUnlock className="group-hover:animate-ping" />
          </button>
          <button
            type="button"
            className="group border w-full justify-center border-indigo-500 bg-indigo-500 text-white rounded-md px-6 py-3 m-2 transition flex items-center gap-3 text-lg font-semibold duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
          >
            View Listing
            <BsArrowRight className="group-hover:translate-x-1 transition-all" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
