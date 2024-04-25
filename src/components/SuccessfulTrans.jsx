"use client";
import React, { useEffect, useRef, useState } from "react";
import { TransCard } from ".";
import { formatDateWithOrdinal, formatMoney } from "@/utils/data";
import { dots } from "@/utils/icons";

const SuccessfulTrans = ({ successfullTransProp, summaryProp }) => {
  const [isClick, setIsClicked] = useState(null);
  const ref = useRef(null);
  const handleClick = (id) => {
    setIsClicked(isClick === id ? null : id);
  };
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
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justfy-start flex-col mt-6">
        <div className="flex justfy-start flex-wrap gap-[13px]">
          <TransCard
            value={summaryProp?.totalTransactions}
            label={"Successful Transactions"}
          />
        </div>
      </div>

      <div className="mt-[30px]">
        <div className="flex justify-between items-center mb-3">
          <p className="text-[14px] text-[#4B4B4B]">
            Successfull transactions made by your customers in your organisation
          </p>
          <p className="text-[14px] text-[#4B4B4B] cursor-pointer">
            Show all fields
          </p>
        </div>
        <div className="overflow-auto w-full table-container">
          <table className="w-full border border-[#D8D8D8]">
            <thead className="bg-[#F0F0F0] ">
              <tr>
                <th className="p-[20px] text-[16px] font-bold text-[#000000] whitespace-nowrap  text-left">
                  ID
                </th>
                <th className="p-[20px] text-[16px] font-bold text-[#000000] whitespace-nowrap text-left">
                  CUSTOMER
                </th>
                <th className="p-[20px] text-[16px] font-bold text-[#000000] whitespace-nowrap text-left">
                  TOTAL PAID
                </th>
                <th className="p-[20px] text-[16px] font-bold text-[#000000] whitespace-nowrap text-left">
                  YOUR EARNINGS
                </th>
                <th className="p-[20px] text-[16px] font-bold text-[#000000] whitespace-nowrap text-left">
                  GIDDAA
                </th>
                <th className="p-[20px] text-[16px] font-bold text-[#000000] whitespace-nowrap text-left">
                  TYPE
                </th>
                <th className="p-[20px] text-[16px] font-bold text-[#000000] whitespace-nowrap text-left">
                  PROPERTY
                </th>
                <th className="p-[20px] text-[16px] font-bold text-[#000000] whitespace-nowrap text-left">
                  PLAN
                </th>
                <th className="p-[20px] text-[16px] font-bold text-[#000000] whitespace-nowrap text-left">
                  PAYMENT DATE
                </th>
                <th className="p-[20px] text-[16px] font-bold text-[#000000] whitespace-nowrap text-left"></th>
              </tr>
            </thead>
            <tbody>
              {successfullTransProp?.data.map((d, i) => (
                <tr key={i}>
                  <td className="whitespace-nowrap border-b p-[20px] text-[15px] text-[#000000]">
                    {d.rrr.slice(-4)}
                  </td>
                  <td className="whitespace-nowrap border-b p-[20px] text-[15px] text-[#000000]">{`${d.customer.firstName} ${d.customer.lastName}`}</td>
                  <td className=" border-b p-[20px] ">
                    <p className="text-[15px] whitespace-nowrap text-[#000000]">
                      {formatMoney(d.amount)}
                    </p>
                    <span className="text-[#335F32] text-[12px] font-bold">
                      (100%)
                    </span>
                  </td>
                  <td className=" border-b p-[20px] ">
                    <p className="text-[15px] whitespace-nowrap text-[#000000]">
                      {formatMoney(d.organizationAmount)}
                    </p>
                    <span className="text-[#335F32] text-[12px] font-bold">
                      (97%)
                    </span>
                  </td>
                  <td className=" border-b p-[20px] ">
                    <p className="text-[15px] whitespace-nowrap text-[#000000]">
                      {formatMoney(d.giddaaAmount)}
                    </p>
                    <span className="text-[#335F32] text-[12px] font-bold">
                      (3%)
                    </span>
                  </td>

                  <td className="whitespace-nowrap border-b p-[20px] text-[15px] text-[#000000]">
                    {d.transactionType}
                  </td>
                  <td className="whitespace-nowrap border-b p-[20px] text-[15px] text-[#000000]">{`${d.house.cityName}`}</td>
                  <td className="whitespace-nowrap border-b p-[20px] text-[15px] text-[#000000]">
                    {d.mortgagePlan.name}
                  </td>
                  <td className="whitespace-nowrap border-b p-[20px]">
                    {formatDateWithOrdinal(d.dateOfPayment)}
                  </td>
                  <td className=" border-b p-[20px] relative" ref={ref}>
                    <button onClick={() => handleClick(i)}>{dots}</button>
                    {isClick === i && (
                      <div className="w-[150px] absolute flex flex-col bg-white border border-[#D3D3D3] rounded-lg right-0 -bottom-[57px]">
                        <button className="text-[12px] text-[#000000] py-3">
                          VIEW RECEIPT
                        </button>
                        <div className="w-full h-[1px] bg-[#D3D3D3]"></div>
                        <button className="text-[12px] text-[#000000] py-3">
                          DOWNLOAD RECEIPT
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulTrans;
