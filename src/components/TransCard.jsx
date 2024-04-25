import { disclaimer } from "@/utils/icons";
import React from "react";

const TransCard = ({ value, label }) => {
  return (
    <div className="flex flex-col p-[20px]  shadow-md  border border-[#F0F0F0] text-center rounded-md 2xl:w-[24%] xl:w-[24%] lg:w-[24%] w-full">
      <div className="flex justify-end">{disclaimer}</div>
      <span className="font-bold text-[25px] text-[#000000]">
        <div
          dangerouslySetInnerHTML={{
            __html: value,
          }}
        />
      </span>
      <p className="text-[#4B4B4B] text-[14px]">{label}</p>
    </div>
  );
};

export default TransCard;
