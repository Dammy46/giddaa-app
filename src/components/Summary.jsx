import { formatMoney } from "@/utils/data";
import { disclaimer } from "@/utils/icons";
import React from "react";
import { TransCard } from ".";

const Summary = ({ summaryProp }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justfy-start flex-col mt-6">
        <p className="text-[18px] text-[#4B4B4B] mb-3">Earnings Breakdown</p>
        <div className="flex justfy-start flex-wrap gap-[13px]">
          <TransCard
            value={formatMoney(summaryProp?.expectedEarnings)}
            label={"Expected Earnings"}
          />
          <TransCard
            value={formatMoney(summaryProp?.totalEarned)}
            label={"Total Earned"}
          />
          <TransCard
            value={formatMoney(summaryProp?.leftToEarn)}
            label={"Left To Earned"}
          />
          <TransCard
            value={formatMoney(summaryProp?.averageAmountEarned)}
            label={"Avarage Amount Earned"}
          />
        </div>
      </div>
      <div className="flex justfy-start flex-col mt-6">
        <p className="text-[18px] text-[#4B4B4B] mb-3">Frequency Breakdown</p>
        <div className="flex justfy-start flex-wrap gap-[13px]">
          <TransCard
            value={summaryProp?.expectedNumberOfTransactions}
            label={"Expected Number Of Transactions"}
          />
          <TransCard
            value={summaryProp?.totalTransactions}
            label={"Total Transactions"}
          />
          <TransCard
            value={summaryProp?.numberOfTransactionsLeft}
            label={"Number Of Transactions Left"}
          />
          <TransCard
            value={summaryProp?.averageMonthlyTransactions}
            label={"Average No of Transaction/ Month"}
          />
        </div>
      </div>
      <div className="flex justfy-start flex-col mt-6">
        <p className="text-[18px] text-[#4B4B4B] mb-3">Default Breakdown</p>
        <div className="flex justfy-start flex-wrap gap-[13px]">
          <TransCard
            value={summaryProp?.totalMissedTransactions}
            label={"Missed Payment"}
          />
          <TransCard
            value={`${Math.trunc(summaryProp?.transactionDefaultRate)}%`}
            label={"Transactions Default Rate"}
          />

          <TransCard
            value={`<span class="text-[#C11111]">${summaryProp?.totalUnpaidTransactions}</span> of ${summaryProp?.totalTransactions}`}
            label={"Customers who’ve missed payment"}
          />
        </div>
      </div>
    </div>
  );
};

export default Summary;
