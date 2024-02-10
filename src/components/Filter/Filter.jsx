import React from "react";

const Filter = () => {
  return (
    <div className="bg-white py-6">
      <div className="container grid lg:grid-cols-2 grid-cols-1 gap-2 flex-col mx-auto ">
        <div className="flex gap-2 lg:flex-row flex-col">
          <div className="lg:w-1/2 mx-2 lg:mx-0  flex-1 w-full">
            <input
              type="text"
              placeholder="Search Niche or Listing #"
              className=" w-full my-2 lg:my-0 px-5 py-5 placeholder-gray-400 font-semibold text-gray-800 relative bg-white rounded text-lg border border-gray-light shadow outline-none focus:outline-none focus:ring "
            />
          </div>
          <div className="lg:w-1/2 mx-2 lg:mx-0 flex-1 w-full">
            <select
              type="text"
              className=" w-full my-2 lg:my-0 px-5 py-[21px]  font-semibold text-gray-400 relative bg-white rounded text-lg border border-gray-light shadow outline-none focus:outline-none focus:ring "
            >
              <option value="Advertise Industry" className="text-gray-800">
                Advertise Industry
              </option>
              <option value="Advertise Industry" className="text-gray-800">
                Advertise Industry
              </option>
              <option value="Advertise Industry" className="text-gray-800">
                Advertise Industry
              </option>
              <option value="Advertise Industry" className="text-gray-800">
                Advertise Industry
              </option>
            </select>
          </div>
        </div>
        <div className=" flex lg:flex-row flex-col lg:mx-0 mx-2 gap-2 ">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Min Price"
              className="flex-1 w-full my-2 lg:my-0 px-5 py-5 placeholder-gray-400 font-semibold text-gray-800 relative bg-white rounded text-lg border border-gray-light shadow outline-none focus:outline-none focus:ring "
            />
            <input
              type="text"
              placeholder="Max Price"
              className="flex-1 w-full my-2 lg:my-0 px-5 py-5 placeholder-gray-400 font-semibold text-gray-800 relative bg-white rounded text-lg border border-gray-light shadow outline-none focus:outline-none focus:ring "
            />
          </div>
          <button
            type="button"
            className="my-2 flex-1 lg:my-0 group border w-full justify-center border-indigo-500 bg-indigo-500 text-white rounded-md px-6 py-3  transition-all flex items-center gap-3 text-lg font-semibold duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
