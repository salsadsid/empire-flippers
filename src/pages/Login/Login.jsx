import React from "react";

const Login = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="lg:p-24 md:p-40 sm:20 p-4 w-full lg:w-1/3">
        <h1 className="text-4xl text-center font-semibold mb-4">Login</h1>
        <form>
          <div className="mt-8 mb-4">
            <label htmlFor="username" className="block mb-2 text-gray-600">
              Email Address *
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full text-lg border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-gray-600">
              Password *
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="text-blue-500"
            />
            <label htmlFor="remember" className="text-gray-600 ml-2">
              Remember Me
            </label>
          </div>

          <div className="mb-6 text-blue-500">
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="border-indigo-500 bg-indigo-500 text-white rounded-md px-6 py-3  transition  gap-3 text-lg font-semibold duration-500 ease flex justify-center select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline  w-full"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-blue-500 text-center">
          <a href="#" className="hover:underline">
            Sign up Here
          </a>
        </div>
      </div>
      <div className="w-2/3 h-screen hidden bg-[url('https://images.unsplash.com/photo-1592313794735-b9558968c0c7?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center lg:block">
        <div className="w-full h-full flex flex-col gap-4 justify-center items-center backdrop-brightness-50">
          <span className="text-7xl">👑</span>
          <p className="text-white font-medium italic text-7xl w-1/2 text-center">
            Empire Flippers
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
