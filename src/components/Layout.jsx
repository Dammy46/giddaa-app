"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MobileMenuBar from "./MobileMenuBar";

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="min-h-screen overflow-hidden">
      <MobileMenuBar setter={setShowSidebar} show={showSidebar} />
      <div className="flex">
        <Sidebar show={showSidebar} setter={setShowSidebar} />
        <div className="flex flex-col flex-grow w-screen md:w-full min-h-screen">
          <div className="min-h-screen flex flex-col">
            <div className="2xl:pl-[20em] xl:pl-[20em] lg:pl-[20em] md:pl-[20em] pl-[1em] pr-[1em] py-[1em] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 mt-[4em] h-full relative">
              {children}

              <button className="fixed inline-flex gap-2 right-0 bottom-0 m-[30px] border rounded-[50px] p-[13px] z-10 bg-white text-[14px] text-[#707070]">
                <svg
                  version="1.1"
                  id="Layer_1"
                  width="20"
                  height="20px"
                  fill="#707070"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <rect x="15" y="14" width="2" height="8" />
                  <rect x="15" y="10" width="2" height="2" />
                  <circle
                    fill="none"
                    stroke="#707070"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    cx="16"
                    cy="16"
                    r="12"
                  />
                </svg>
                HELP & SUPPORT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
