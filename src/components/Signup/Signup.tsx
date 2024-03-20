import React from "react";
import { Link } from "react-router-dom";
// import "./signup.css";

const Signup = () => {
  return (
    <>
      <div className="container bg-white">
        <div className="logo text-center">
          <img
            src="/assets/s_logo_black.png"
            className="mx-auto"
            width={120}
            alt=""
          />
        </div>
        <div className="text-black">
          <div className="py-10 text-center w-1/2 mx-auto">
            <h1 className="text-5xl my-12 font-semibold">Log in to Spotify</h1>
            <div className="border-b border-gray-400 w-3/4 my-4 mx-auto"></div>
            <form className="text-center mx-auto w-1/2 ">
              <div className="w-full text-left py-4">
                <label
                  htmlFor="email"
                  className="font-semibold mb-2 inline-block"
                >
                  Email or username
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email or username"
                  className="block w-full rounded-[4px] border-0  text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[2px] focus:ring-inset focus:ring-black-600 outline-none p-3 hover:ring-black bg-[#fff]"
                />
              </div>
              <div className="w-full text-left py-4">
                <label
                  htmlFor="password"
                  className="font-semibold mb-2 inline-block"
                >
                  Password
                </label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="block w-full rounded-[4px] border-0  text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[2px] focus:ring-inset focus:ring-black-600 outline-none p-3 hover:ring-black bg-[#fff]"
                />
              </div>
              <div className="w-full text-left py-4">
                <input
                  type="submit"
                  value="Log in"
                  placeholder="Password"
                  className="block cursor-pointer w-full outline-none bg-green-400 text-black p-3 hover:scale-105 translate-all duration-200 font-medium hover:font-semibold text-center rounded-full "
                />
              </div>
              <div className="w-full text-center py-4">
                <Link
                  to="/password/forgot"
                  className="text-black font-semibold underline mx-auto"
                >
                  Forget Password?
                </Link>
              </div>
            </form>
            <div className="border-b border-gray-400 w-3/4 my-4 mx-auto"></div>
            <p className="pt-8">
              <span className="text-gray-300 font-semibold">
                Don't have an account?{" "}
              </span>

              <Link
                to="/signup"
                className="text-black hover:text-green-500 font-semibold underline mx-auto"
              >
                Sign up for Sonic Scoop
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
