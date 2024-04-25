"use client";
import React, { useState } from "react";
import GiddaaLogo from "../../public/assets/images/giddaa-logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ session }) => {
  const [isActive, setIsActive] = useState(false);
  const links = [
    "Home",
    "Properties",
    "Developers",
    "Mortages Banks",
    "Consult an Expert",
  ];
  return (
    <div>
      <div className="bg-[#F2F2F2] shadow-md fixed w-full z-[2]">
        <div className=" 2xl:max-w-7xl xl:max-w-7xl lg:max-w-7xl md:max-w-6xl w-full mx-auto p-[1em] flex justify-between gap-4 lg:items-center md:items-center items-start max-[1460px]:flex-col max-[767px]:flex-row max-[767px]:items-center">
          <div className="flex justify-between items-center lg:gap-[2em] md:gap-[2em] gap-[10px] lg:flex-1 md:flex-1 lg:w-auto w-full">
            <div className="lg:w-[69px] md:w-[60px] w-50px h-full flex items-center justify-center ">
              <Image src={GiddaaLogo} alt="giddaa-logo" />
            </div>

            <form className="lg:w-[481px] md:w-[400px] w-full h-full">
              <div className="relative">
                <input
                  type="search"
                  className="placeholder:text-[#585858] block w-full p-4 pe-10 text-sm text-gray-900 border-0  rounded-[100px] shadow-sm focus:outline-none focus:ring-0"
                  placeholder="Search For Properties, Developers, Banks"
                />
                <div className="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer">
                  <svg
                    className="lg:w-[23px] md:w-[23px] lg:h-[23px] md:h-[23px] w-[18px] h-[18px] text-[#335F32] "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
              </div>
            </form>
          </div>
          <div className="lg:flex md:flex justify-between items-center gap-3 ml-[2em] flex-[2] max-[1460px]:m-0  hidden lg:w-auto w-full">
            <div className="flex justify-between items-center gap-[2em]">
              {links.map((l, i) => (
                <Link
                  href="#"
                  key={i}
                  className="group whitespace-nowrap  text-[#4B4B4B] hover:text-[#335F32] hover:font-semibold text-[16px] h-[40px] flex flex-col justify-center items-center relative transition-all duration-300 ease-in-out"
                >
                  <span>{l}</span>
                  <div className="w-[6px] h-[6px] group-hover:block hidden rounded-full bg-[#335F32] absolute left-[50%] top-[35px]" />
                </Link>
              ))}
            </div>
            {session ? (
              ""
            ) : (
              <Link href={"/signin"}>
                <button
                  className="outline-none focus:outline-none active:outline-none focus:ring-o active:ring-0 px-[2em] py-[.5em] bg-[#335F32] rounded-[30px] text-[#ffff] h-full font-semibold hover:opacity-[.5] transition-all duration-300 ease-in-out"
                  aria-label="login"
                >
                  Login
                </button>
              </Link>
            )}
          </div>
          <button
            onClick={() => setIsActive(true)}
            className="lg:hidden md:hidden border-2 p-[8px] border-[#335F32] rounded-md h-full"
          >
            <svg
              className="w-6 h-6 text-[#335F32] "
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
          </button>
        </div>
      </div>
      <div
        className={
          isActive
            ? "w-[60%]  top-0 right-0 bottom-0 z-50 bg-[#FFFFFF] border-r border-[#0000000D] shadow-sm lg:hidden md:hidden visible transition-all duration-300 ease-in-out fixed"
            : "w-0  top-0 right-0 bottom-0 z-50 bg-[#FFFFFF] border-r border-[#0000000D] shadow-sm lg:hidden md:hidden invisible transition-all duration-300 ease-in-out fixed"
        }
      >
        <div className="flex justify-end items-center m-[20px] overflow-x-hidden">
          <button onClick={() => setIsActive(false)}>
            <svg
              className="w-6 h-6 text-[#335F32] "
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
          </button>
        </div>

        <div className="flex flex-col   items-start justify-start  p-[30px] overflow-auto overflow-x-hidden gap-[20px]">
          {links.map((l, i) => (
            <Link
              href="#"
              key={i}
              className="group whitespace-nowrap  text-[#4B4B4B] hover:text-[#335F32] hover:font-semibold text-[16px] h-[40px] flex  justify-center items-center relative "
            >
              <div className="w-[6px] h-[6px] group-hover:block hidden  rounded-full bg-[#335F32] absolute -left-[11px]" />
              <span>{l}</span>
            </Link>
          ))}
          {session ? (
            ""
          ) : (
            <Link href={"/signin"}>
              <button
                className="w-full outline-none focus:outline-none active:outline-none focus:ring-o active:ring-0 px-[2em] py-[.5em] bg-[#335F32] rounded-[30px] text-[#ffff]  font-semibold hover:opacity-[.5]"
                aria-label="login"
              >
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
