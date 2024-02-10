import React from "react";
import { AiFillUnlock } from "react-icons/ai";
import { BsArrowRight, BsFillArrowRightCircleFill } from "react-icons/bs";

const TopBanner = () => {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-no-repeat"
      style={{
        backgroundPosition: "50%",
        backgroundImage:
          "url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp')",
        height: "500px",
      }}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.25)] bg-fixed">
        <div className="flex h-full items-center justify-center">
          <div className="px-6 text-center text-white md:px-12">
            <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
              Online Businesses For Sale <br />
              <span className="text-2xl mt-3 font-medium sm:block hidden tracking-normal">
                Online Businesses For Sale Profitable online businesses from
                trustworthy sellers
              </span>
            </h1>
            <div className="flex justify-center">
              <button
                type="button"
                className="group justify-center border border-yellow-500 bg-yellow-500 text-white rounded-md px-[46px] py-4  text-xl flex items-center gap-3 font-semibold transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
              >
                Register Full Access
                <BsArrowRight
                  size="25"
                  className="group-hover:translate-x-1 transition-all"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
