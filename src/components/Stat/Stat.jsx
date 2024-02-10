import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
const Stat = () => {
  return (
    <div className=" bg-white py-10">
      <div className="max-w-7xl mx-auto gap-8 grid grid-cols-1 sm:grid-cols-3">
        <div className="flex items-center gap-6 sm:mx-0 mx-6 justify-start">
          <span>
            <BsCheckCircleFill size="80" className="text-yellow-500" />
          </span>
          <div className="flex flex-col gap-2">
            <p className="sm:text-5xl text-3xl font-bold">$1,220,452</p>
            <p className="sm:text-2xl text-lg font-semibold text-gray-400">
              Sales last 30 days
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6 sm:mx-0 mx-6 sm:justify-center justify-start">
          <BsCheckCircleFill size="80" className="text-yellow-500" />
          <div className="flex flex-col gap-2">
            <p className="sm:text-5xl text-3xl font-bold">68%</p>
            <p className="sm:text-2xl text-lg font-semibold text-gray-400">
              Sales Success Rate
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6 sm:mx-0 mx-6 sm:justify-end justify-start">
          <BsCheckCircleFill size="80" className="text-yellow-500" />
          <div className="flex flex-col gap-2">
            <p className="sm:text-5xl text-3xl font-bold">$1,220,452</p>
            <p className="sm:text-2xl text-lg font-semibold text-gray-400">
              Sales last 30 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
