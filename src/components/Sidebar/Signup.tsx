import React from "react";
import "./signup.css";
import { toggleBanner } from "../../store/banner_slice";
import { useDispatch } from "react-redux";

const Signup = () => {
    const dispatch = useDispatch();
  return (
    <div className="fixed bottom-0 signup_bar text-sm items-center flex px-4 py-2 mx-0 justify-between">
      <div>
        <p className=" uppercase">preview on spotify</p>
        <p className="">
          Sign up to get unlimited Songs and podcasts with occasional ads. No
          credit card needed
        </p>
      </div>
      <div>
        <button className="rounded-full text-white px-8 text-lg border py-2 font-semibold bg-[#af2896] mr-2">
          Sign Up free
        </button>
        <button className="absolute top-0 text-black" onClick={()=>dispatch(toggleBanner())}>x</button>
      </div>
    </div>
  );
};

export default Signup;
