import { HiOutlinePaperAirplane } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { FaCrown } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Topbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <nav className="bg-[#222] text-white sticky top-0 z-50 w-full">
        <div className="container mx-auto sm:px-0 px-4s">
          <div className="flex mx-auto justify-between  ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-8">
              {/* logo */}
              <div>
                <a href="/" className="flex gap-3 font-bold items-center ">
                  <FaCrown size="40" className="text-yellow-400" />
                  <span className="text-2xl">Empire Flippers</span>
                </a>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-4  text-md">
                <Link
                  to="/"
                  className="hover:text-slate-200 transition-all duration-300 py-2 px-2  font-bold hover:border-[#f5a622] hover:border-b-4 border-b-4  border-b-[#222]"
                >
                  Marketplace
                </Link>
                <Link
                  to="/sell-website"
                  className="hover:text-slate-200 transition-all duration-300 py-2 px-2  font-bold hover:border-[#f5a622] hover:border-b-4 border-b-4  border-b-[#222]"
                >
                  Sell Website
                </Link>
                <Link
                  to="/"
                  className="hover:text-slate-200 transition-all duration-300 py-2 px-2  font-bold hover:border-[#f5a622] hover:border-b-4 border-b-4  border-b-[#222]"
                >
                  Company
                </Link>
                <Link
                  to="/"
                  className="hover:text-slate-200 transition-all duration-300 py-2 px-2  font-bold hover:border-[#f5a622] hover:border-b-4 border-b-4  border-b-[#222]"
                >
                  Resource
                </Link>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              <div className="hidden sm:flex items-center gap-10">
                <div>
                  <button
                    onClick={() => setShowLoginModal(true)}
                    type="button"
                    className=" justify-center   text-white rounded-md px-4 py-3  text-lg flex items-center gap-3 font-semibold transition duration-500 ease select-none focus:outline-none focus:shadow-outline"
                  >
                    <RiLockPasswordLine size="28" className="text-yellow-600" />
                    Login
                  </button>
                  {showLoginModal ? (
                    <>
                      <div
                        onClick={() => setShowLoginModal(false)}
                        className="transition-all duration-500 ease-in-out justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                      >
                        <div
                          onClick={(e) => e.stopPropagation()}
                          className="relative w-auto my-6 mx-auto max-w-3xl"
                        >
                          {/*content*/}
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex  justify-end p-5  rounded-t">
                              <button
                                className="p-1 ml-auto  border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowLoginModal(false)}
                              >
                                <span className=" text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                                  ×
                                </span>
                              </button>
                            </div>
                            {/*body*/}
                            <div className="relative px-12 mb-16">
                              <div className="text-black flex flex-col items-center justify-center gap-2">
                                <FaCrown
                                  size="40"
                                  className="text-yellow-600"
                                />
                                <p className="text-xl font-semibold">
                                  Welcome Back
                                </p>
                              </div>
                              <div className="mt-4 flex flex-col gap-4 mb-4 items-center">
                                <button
                                  type="button"
                                  className=" text-black  border-gray-light border-2 hover:text-blue-600 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-md text-xl py-4 px-32 justify-center inline-flex gap-4 items-center dark:focus:ring-[#4285F4]/55 w-full"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                    width="32px"
                                    height="32px"
                                  >
                                    <path
                                      fill="#FFC107"
                                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                    />
                                    <path
                                      fill="#FF3D00"
                                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                    />
                                    <path
                                      fill="#4CAF50"
                                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                    />
                                    <path
                                      fill="#1976D2"
                                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                    />
                                  </svg>
                                  Sign in with Google
                                </button>
                                <button
                                  onClick={() => {
                                    setShowLoginModal(false);
                                    navigate("/login");
                                  }}
                                  type="button"
                                  className=" text-black border-gray-light border-2 hover:text-blue-600 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-md text-xl  py-4 text-center inline-flex gap-4 items-center justify-center dark:focus:ring-[#4285F4]/55 w-full"
                                >
                                  <AiOutlineMail size="22" />
                                  Sign in with Email
                                </button>
                              </div>
                              <div>
                                <p className="text-black text-center text-lg">
                                  Dont have an Empire Flippers account? Sign Up
                                  Here
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : null}
                </div>
                <div>
                  <button
                    type="button"
                    className="group justify-center border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-3  text-lg flex items-center gap-3 font-semibold transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
                  >
                    Get Started
                    <BsArrowRight className="group-hover:translate-x-1 transition-all" />
                  </button>
                </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <BiMenu className="h-8" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full  bg-black text-white overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div>
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              <a href="#" className="border-l-4 border-gray-600">
                Features
              </a>
              <a href="#">Pricing</a>
              <a href="#">Download</a>
              <a href="#">Classic</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Topbar;
