import React from "react";

const SubscriptionForm = () => {
  return (
    <div className="container flex flex-col justify-center items-center mx-auto my-8">
      <div
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1538582709238-0a503bd5ae04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)",
        }}
        className="max-w-7xl bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
      ></div>
      <div className=" bg-white -mt-24 shadow-md rounded-lg overflow-hidden">
        <div className="items-center justify-between py-10 px-5 bg-white shadow-2xl rounded-lg mx-auto text-center">
          <div className="px-2 -mt-6">
            <div className="text-center">
              <h1 className=" text-3xl text-grey-800 font-medium leading-loose my-3 w-full">
                Get the Latest Information
              </h1>
              <div className="w-full text-center">
                <form className="max-w-md">
                  <div className=" mx-auto p-1 pr-0 flex items-center">
                    <input
                      type="email"
                      placeholder="yourmail@example.com"
                      className="max-w-lg appearance-none rounded p-3 text-grey-dark mr-2 border border-gray-light shadow outline-none focus:outline-none focus:ring"
                    />
                    <button
                      type="button"
                      className="group border  justify-center border-indigo-500 bg-indigo-500 text-white rounded-md px-6 py-3 m-2 transition flex items-center gap-3 text-lg font-semibold duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                    >
                      Get Started
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionForm;
