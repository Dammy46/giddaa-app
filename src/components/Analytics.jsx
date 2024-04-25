import React from "react";

const Analytics = () => {
  const analytics = [
    {
      label: "NO OF PROPERTIES",
      value: "180",
    },
    {
      label: "NO OF UNITS",
      value: "1,800",
    },
    {
      label: "PLANS/METHODS YOU CAN PURCHASE YOUR HOME",
      value: "32",
    },
  ];
  return (
    <section className="bg-[#F3FAF2] px-[1em] gap-3">
      <div className="2xl:max-w-7xl xl:max-w-7xl lg:max-w-7xl md:max-w-6xl w-full mx-auto flex justify-around py-[1.5em] relative 2xl:flex-row xl:flex-row lg:flex-row flex-col">
        {analytics.map((a, i) => (
          <div className="text-center" key={i}>
            <h5 className="text-[#335F32] font-semibold xl:text-[64px] lg:text-[60px] md:text-[50px] text-[38px]">
              {a.value}
            </h5>
            <p className="text-[#000000] text-[14px] font-medium">{a.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Analytics;
