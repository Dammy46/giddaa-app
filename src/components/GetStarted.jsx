import React from "react";

const GetStarted = () => {
  return (
    <div className="px-[1em] py-[3em] bg-[#F3FAF2]">
      <div className="2xl:max-w-7xl xl:max-w-7xl lg:max-w-7xl md:max-w-6xl w-full mx-auto flex justify-center">
        <div className="w-[700px] text-center">
          <h3 className="text-[#335F32] text-[35px] ">Get Started</h3>
          <p className="text-[15px] text-[#000000] font-medium mt-[10px] mb-[20px]">
            We are on a mission to empower income earning Nigerians to own their
            first homes before they turn 50 years old. Create an account and
            join the mission. It’s gonna be a long but fulfilling ride.{" "}
            <span className="text-[#335F32]"> Let’s Go! 🏎️</span>
          </p>
          <div className="flex justify-center">
            <button
              className="outline-none focus:outline-none active:outline-none focus:ring-o active:ring-0 px-[2em] py-[1em] bg-[#335F32] rounded-[30px] text-[#ffff] h-full font-semibold hover:opacity-[.5] w-auto transition-all duration-300 ease-in-out"
              aria-label="login"
            >
              Create an Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
