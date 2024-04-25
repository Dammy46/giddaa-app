"use client";
import { chevDown } from "@/utils/icons";
import Image from "next/image";
import React, { useState } from "react";

const Section = ({
  bg,
  icon,
  title,
  section,
  desc,
  image,
  features,
  iconBg,
  titleColor,
  clasBg,
}) => {
  const [isClick, setIsClicked] = useState(null);
  const handleClick = (id) => {
    setIsClicked(isClick === id ? null : id);
  };

  return (
    <section className={`py-[3.5em] px-[1em] h-full bg-[${bg}]`}>
      <div className="2xl:max-w-7xl xl:max-w-7xl lg:max-w-7xl md:max-w-6xl w-full mx-auto">
        <div className="flex justify-between 2xl:flex-row xl:flex-row lg:flex-row flex-col gap-[30px]">
          <div className="2xl:w-[55%] xl:w-[55%] lg:w-[55%]  w-full">
            <div className="flex justify-start flex-col mb-[18px]">
              {section && (
                <div className="flex justify-start ">
                  <h2 className="text-[#335F32] font-medium relative after:absolute after:bg-[url('../../public/assets/svgs/line.svg')] after:w-full after:h-[4px] after:bottom-0 after:right-0 text-[28px] 2xl:text-[45px] xl:text-[45px] lg:text-[43px] md:text-[40px] after:bg-no-repeat after:bg-center mb-[30px]">
                    {section}
                  </h2>
                </div>
              )}

              <div
                className={`w-[100px] h-[100px] bg-[${iconBg}] ${clasBg} p-[15px] flex justify-center items-center rounded-full`}
              >
                {icon}
              </div>
            </div>
            <h2
              className={`${
                titleColor ? `text-[${titleColor}]` : "text-[#0a7e324d]"
              } 2xl:text-[57px] xl:text-[57px] lg:text-[57px] md:text-[57px] text-[30px] mb-[20px] `}
            >
              {title}
            </h2>

            <div
              className="text-[16px] text-[#000000]"
              dangerouslySetInnerHTML={{
                __html: desc,
              }}
            />
            <div className="flex justify-start items-center flex-wrap gap-[26px] mt-[18px]">
              {features?.map((f, i) => (
                <div className="relative" key={i}>
                  <div
                    className="flex justify-start cursor-pointer z-[1]"
                    onClick={() => handleClick(i)}
                  >
                    <span className={isClick === i ? "rotate-180" : ""}>
                      {chevDown}
                    </span>
                    <p className="text-[#335F32] text-[15px] font-bold ml-[15px]">
                      {f.label}
                    </p>
                  </div>
                  {isClick === i && (
                    <div className="absolute w-full p-[10px] border rounded-[15px] mt-[10px] z-[2] bg-white">
                      <p className="text-[12px]">{f.desc}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div
            className={`2xl:w-[45%] xl:w-[45%] lg:w-[45%]  w-full 2xl:ml-[50px] xl:ml-[50px] lg:2xl:ml-[50px] ml-0 flex justify-center ${
              section ? "mt-[85px] " : "mt-0"
            }`}
          >
            <div className="2xl:w-[500px]  xl:w-[500px] h-[500px]  w-full  relative ">
              <Image src={image} alt="diaspora" fill objectFit="contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
