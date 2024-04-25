"use client";

import {
  AnalyticsTrans,
  Defaults,
  ExpectedTrans,
  Forecast,
  SuccessfulTrans,
  Summary,
} from "@/components";
import Layout from "@/components/Layout";
import { tabsTitle } from "@/utils/data";
import { bell } from "@/utils/icons";
import { useState } from "react";

export default function PageWrap({
  summaryProp,
  successfullTransProp,
  expectedTransProp,
  defaultProp,
}) {
  const [toggle, setToggle] = useState(1);
  const handleToggle = (id) => {
    setToggle(id);
  };
  return (
    <Layout>
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <h2 className="2xl:text-[60px] xl:text-[60px] lg:text-[60px] md:text-[50px] text-[45px] text-[#000000]">
            Transactions
          </h2>
          <p className="text-[17px] text-[#4B4B4B]">
            View all your transactions and how much you have earned from
            customers
          </p>
        </div>
        <div className="hidden 2xl:flex xl:flex lg:flex md:flex w-[50px] h-[50px] p-[15px] bg-[#335F32] rounded-full  justify-center items-center">
          <div className="relative">
            {bell}
            <div className="absolute w-[15px] h-[15px] bg-[#FFFFFF] rounded-full flex items-center justify-center -top-[4px] -right-[10px]">
              <span className="text-[#335F32] text-[10px] font-semibold">
                2
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 justify-start items-center border-b mt-[30px] flex-wrap">
        {tabsTitle.map((t, i) => (
          <div
            className={`flex py-4  cursor-pointer ${
              toggle === i + 1 ? "border-b border-[#335F32]" : ""
            }`}
            key={i}
            onClick={() => handleToggle(i + 1)}
          >
            <p
              className={` ${
                toggle === i + 1 ? "text-[#335F32]" : "text-[#707070]"
              } text-[14px] font-semibold`}
            >
              {t}
            </p>
          </div>
        ))}
      </div>
      {toggle === 1 && <Summary summaryProp={summaryProp} />}
      {toggle === 2 && (
        <SuccessfulTrans
          successfullTransProp={successfullTransProp}
          summaryProp={summaryProp}
        />
      )}
      {toggle === 3 && (
        <ExpectedTrans
          expectedTransProp={expectedTransProp}
          summaryProp={summaryProp}
        />
      )}
      {toggle === 4 && (
        <Defaults summaryProp={summaryProp} defaultProp={defaultProp} />
      )}
      {toggle === 5 && <AnalyticsTrans />}
      {toggle === 6 && <Forecast />}
    </Layout>
  );
}
