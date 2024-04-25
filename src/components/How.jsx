import { how } from "@/utils/data";
import { circlePlay } from "@/utils/icons";
import React from "react";

const How = () => {
  return (
    <section className="bg-[#fff] min-h-screen pt-[5em] pb-[3em] px-[1em]">
      <div className="2xl:max-w-7xl xl:max-w-7xl lg:max-w-7xl md:max-w-6xl w-full mx-auto">
        <div className="flex justify-start ">
          <h2 className="text-[#335F32] font-medium relative after:absolute after:bg-[url('../../public/assets/svgs/line.svg')] after:w-full after:h-[4px] after:bottom-0 after:right-0 text-[28px] 2xl:text-[45px] xl:text-[45px] lg:text-[43px] md:text-[40px] after:bg-no-repeat after:bg-center">
            How it works
          </h2>
        </div>
        <div className="flex 2xl:justify-between xl:justify-between lg:justify-around md:justify-around justify-normal flex-wrap mt-[30px] gap-[30px]">
          {how.map((h, i) => (
            <div
              className="flex justify-start items-start 2xl:w-[400px] xl:w-[400px] lg:w-[400px]  w-full group transition-all duration-300 ease-in-out"
              key={i}
            >
              <div>
                <div className="w-[50px] h-[50px] bg-[#F5F5DE] group-hover:bg-[#335F32] rounded-full p-[15px] flex justify-center items-center transition-all duration-300 ease-in-out">
                  <h5 className="text-[28px] text-[#335F32] group-hover:text-[#fff] ">
                    {i + 1}
                  </h5>
                </div>
              </div>
              <div className="p-[15px] group-hover:rounded-[20px] ml-[10px] flex flex-col gap-3 group-hover:bg-[#F3FAF2] transition-all duration-300 ease-in-out">
                <h5 className="text-[#335F32]">{h.label}</h5>
                <div
                  className="text-[14px] text-[#000000] ml-[10px]"
                  dangerouslySetInnerHTML={{
                    __html: h.desc,
                  }}
                />
                <div className="flex justify-start items-start 2xl:mt-auto xl:mt-auto lg:mt-auto mt-[20px]">
                  <button className="border rounded-[30px] inline-flex items-center gap-[5px] border-[#335F32] text-[#335F32] text-[11px] bg-[#fff] p-[8px]">
                    {circlePlay}
                    WATCH THE VIDEO TO LEARN MORE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default How;
