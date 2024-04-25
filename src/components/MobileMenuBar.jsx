import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/images/giddaa-logo.png";

const MobileMenuBar = ({ setter, show }) => {
  return (
    <div className="bg-[#F0F0F0] p-[1em] flex 2xl:hidden xl:hidden lg:hidden md:hidden justify-between items-center fixed w-full shadow-md">
      <Image src={Logo} alt="giddaa-logo" width={50} height={50} />
      <button
        onClick={() => setter(!show)}
        className="lg:hidden md:hidden border-2 p-[5px] border-[#335F32] rounded-md h-full focus:outline-none"
      >
        {show ? (
          <svg
            className="w-[1em] h-[1em] text-[#335F32] "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>
        ) : (
          <svg
            className="w-[1em] h-[1em] text-[#335F32] "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h10"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default MobileMenuBar;
