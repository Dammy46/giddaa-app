"use client";
import { chevDown, circlePlay, customBullet } from "@/utils/icons";
import React, { useEffect, useRef } from "react";

const OptionsCard = ({ data, id, isSelected, handleClick, setIsClicked }) => {
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsClicked(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div
      className={`2xl:h-[900px] xl:h-[900px] lg:h-[900px] h-auto flex flex-col bg-[${data.bg}] rounded-[30px] p-[20px] 2xl:w-[30%] xl:w-[30%] lg:w-[48%] w-full hover:border cursor-pointer hover:border-[#335F32] transition-all duration-300 ease-in-out`}
    >
      <div className="flex justify-start items-center">
        {data.icon}
        <div className="flex flex-col justify-center items-center ml-[50px]">
          <h5 className="text-[#335F32] text-[25px]">{data.title}</h5>
          <p className="text-[14px] text-[#000000]">{data.subTitle}</p>
        </div>
      </div>
      <p className="text-[#000000] text-[14px] leading-[28px] mt-[15px] mb-[30px]">
        {data.desc}
      </p>
      <div className="relative" ref={ref}>
        <div
          className="flex justify-start cursor-pointer"
          onClick={() => handleClick(id)}
        >
          <span className={isSelected ? "rotate-180" : ""}>{chevDown}</span>
          <p className="text-[#335F32] text-[15px] font-semibold ml-[15px]">
            View Another Explanation 💡
          </p>
        </div>
        {isSelected && (
          <div className="absolute w-full p-[10px] border rounded-[15px] mt-[10px] bg-white">
            <p className="text-[12px]">{data.explanation}</p>
          </div>
        )}
      </div>
      <div className="mt-[20px]">
        <div className="flex justify-center">
          <h5 className="text-[#335F32] text-[20px]">
            {`     Features of ${data.title}`}
          </h5>
        </div>
        <div className="flex flex-col gap-3 mt-[10px]">
          {data.features?.map((f, i) => (
            <div className="flex justify-start items-start" key={i}>
              <span>{customBullet}</span>

              <div
                className="text-[14px] text-[#000000] ml-[10px]"
                dangerouslySetInnerHTML={{
                  __html: f,
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center 2xl:mt-auto xl:mt-auto lg:mt-auto mt-[20px]">
        <button className="border rounded-[30px] inline-flex items-center gap-[5px] border-[#335F32] text-[#335F32] text-[14px] bg-[#fff] p-[12px]">
          {circlePlay}
          WATCH THE VIDEO TO LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default OptionsCard;
