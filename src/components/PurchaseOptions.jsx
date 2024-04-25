"use client";
import React, { useState } from "react";
import OptionsCard from "./OptionsCard";
import { options } from "@/utils/data";
const PurchaseOptions = () => {
  const [isClick, setIsClicked] = useState(null);

  const handleClick = (id) => {
    setIsClicked(isClick === id ? null : id);
  };

  return (
    <section className="bg-[#fff] py-[3em] px-[1em]">
      <div className="2xl:max-w-7xl xl:max-w-7xl lg:max-w-7xl md:max-w-6xl w-full mx-auto">
        <div className="flex justify-start  ">
          <h2 className="text-[#335F32] font-medium relative after:absolute after:bg-[url('../../public/assets/svgs/purchase-line.svg')] after:w-full after:h-[4px] after:bottom-0 after:right-0 text-[28px] 2xl:text-[45px] xl:text-[45px] lg:text-[43px] md:text-[40px] after:bg-no-repeat after:bg-center">
            Your Purchase Options
          </h2>
        </div>
        <div className="flex text-center justify-center items-center mt-[40px]">
          <div className="2xl:w-[45%] xl:w-[45%] lg:w-[45%] w-full">
            <p className="text-[#000000] text-[16px] font-medium">
              Buying a home isn’t a one-size fits all kind of purchase — we
              know!. So…we give you all the options the market has to offer to
              choose from!
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-4 items-center flex-wrap mt-[1.5em]">
          {options.map((o, i) => (
            <OptionsCard
              key={i}
              data={o}
              id={i}
              isSelected={isClick === i}
              handleClick={handleClick}
              setIsClicked={setIsClicked}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PurchaseOptions;
