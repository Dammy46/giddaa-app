"use client";
import React, { useEffect, useRef, useState } from "react";
import { TransCard } from ".";
import {
  calculateDaysLeft,
  daysSince,
  formatDateWithOrdinal,
  formatMoney,
} from "@/utils/data";
import { dots, outlineBell, outlineSack } from "@/utils/icons";

const Defaults = ({ summaryProp, defaultProp }) => {
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
            value={formatMoney(summaryProp?.expectedEarnings)}
            label={"Expected Earnings"}
          />
          <TransCard
            value={formatMoney(summaryProp?.totalEarned)}
            label={"Total Default Amount"}
          />
          <TransCard
            value={summaryProp?.totalMissedTransactions}
            label={"Missed Payment"}
          />
          <TransCard
            value={`<span class="text-[#C11111]">${summaryProp?.totalUnpaidTransactions}</span> of ${summaryProp?.totalTransactions}`}
            label={"Customers who’ve missed payment"}
          />
        </div>
      </div>

      <div className="mt-[30px]">
        <div className="flex justify-between items-center mb-3  gap-[10px] flex-wrap">
          <p className="text-[14px] text-[#4B4B4B] w-full 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:[70%]">
            Data on payments that should have beeen made but weren’t and the
            customers who should have paid
          </p>
          <p className="text-[14px] text-[#4B4B4B] cursor-pointer">
            Show all fields
          </p>
        </div>
        <div className="overflow-auto w-full min-h-[300px] table-container">
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
                  AMOUNT
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
                  DUE DATE
                </th>
                <th className="p-[20px] text-[16px] font-bold text-[#000000] whitespace-nowrap text-left">
                  DAYS OVERDUE
                </th>
                <th className="p-[20px] text-[16px] font-bold text-[#000000] whitespace-nowrap text-left"></th>
              </tr>
            </thead>
            <tbody>
              {defaultProp?.data.map((d, i) => (
                <tr key={i}>
                  <td className="whitespace-nowrap border-b p-[20px] text-[15px] text-[#000000]">
                    {d.rrr !== null ? d.rrr.slice(-4) : "N/A"}
                  </td>
                  <td className="whitespace-nowrap border-b p-[20px] text-[15px] text-[#000000]">{`${d.customer.firstName} ${d.customer.lastName}`}</td>
                  <td className=" border-b p-[20px] text-[15px] whitespace-nowrap text-[#000000]">
                    {formatMoney(d.amount)}
                  </td>
                  <td className=" border-b p-[20px] text-[15px] whitespace-nowrap text-[#000000]">
                    {d.transactionType}
                  </td>
                  <td className=" border-b p-[20px] text-[15px] whitespace-nowrap text-[#000000]">
                    {`${d.house.cityName}`}
                  </td>

                  <td className="whitespace-nowrap border-b p-[20px] text-[15px] text-[#000000]">
                    {d.mortgagePlan.name}
                  </td>

                  <td className="whitespace-nowrap border-b p-[20px]">
                    {formatDateWithOrdinal(d.dueDate)}
                  </td>
                  <td className="whitespace-nowrap border-b p-[20px]">
                    {daysSince(d.dueDate)}
                  </td>
                  <td
                    className=" border-b p-[20px] relative text-right"
                    ref={ref}
                  >
                    <button onClick={() => handleClick(i)}>{dots}</button>
                    {isClick === i && (
                      <div className="min-w-[150px] absolute flex flex-col bg-white border border-[#D3D3D3] rounded-lg right-0 -bottom-[57px] p-[10px]">
                        <button className="text-[12px] text-[#000000] py-2 inline-flex justify-start items-center whitespace-nowrap gap-2">
                          {outlineBell} Remind Customer
                        </button>

                        <button className="text-[12px] text-[#000000] py-2 inline-flex justify-start items-center whitespace-nowrap gap-2">
                          {outlineSack} View Repayment Schedule
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

export default Defaults;
