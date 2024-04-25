import {
  afford,
  application,
  option,
  payment,
  quote,
  scam,
  streamline,
  virtual,
} from "@/utils/icons";
import React from "react";

const Why = () => {
  const whys = [
    {
      icon: scam,
      title: "Stay Scam Free!",
      desc: "We partner directly with trusted banks and developers. Your applications are sent straight to them, eliminating the need for agents, close relatives or friends. We connect you directly to the source.",
    },
    {
      icon: streamline,
      title: "Streamline Your Search",
      desc: "We simplify your property search by presenting comprehensive information in a visual and easily understandable format, making decision making easier and quicker for you along your journey.",
    },
    {
      icon: option,
      title: "Multiple Purchase Options",
      desc: "We provide you with a diverse range of housing options and flexible financing plans, ensuring you have a wide selection of choices to suit your preferences and current financial situation.",
    },
    {
      icon: payment,
      title: "Pay Online & Track All Payments",
      desc: "Pay online and track every single payment you make. We make your transactions clear as day between you and the partner you purchase from ,be it a property developer or bank.",
    },
    {
      icon: afford,
      title: "Find What You Can Afford",
      desc: "We use affordability tags to visually display properties and financing plans you can afford based on age and income, which could help you simplify your decision-making.",
    },
    {
      icon: application,
      title: "Apply Online — in 5 Mins, and Track Your Application.",
      desc: "On Giddaa, we don’t tell you to fill a form and we will get back to you. You can apply for your home 100% online and track your application as it is being processed by the developer or bank.",
    },
    {
      icon: virtual,
      title: "See It For Yourself — Virtual Viewings",
      desc: "Living abroad? We offer a service that allows you to view the property through a video call. We also send a report of the condition of the property after the viewing. We’re not quite at the VR level yet. 😁",
    },
    {
      icon: application,
      title: "Manage Terms and Documentation",
      desc: "All terms between you and the developer or bank are managed online. You can view the terms you’ve offered, send revisions, if need be all online. You can also view and manage important documents like offer letters online.",
    },
  ];
  return (
    <section className="bg-[#F3FAF2] px-[1em] py-[3em]">
      <div className="2xl:max-w-7xl xl:max-w-7xl lg:max-w-7xl md:max-w-6xl w-full mx-auto overflow-hidden">
        <div className="flex justify-start ">
          <h2 className="text-[#335F32] font-medium relative after:absolute after:bg-[url('../../public/assets/svgs/line.svg')] after:w-full after:h-[4px] after:bottom-0 after:right-0 text-[28px] 2xl:text-[45px] xl:text-[45px] lg:text-[43px] md:text-[40px] after:bg-no-repeat after:bg-center">
            Why Giddaa?
          </h2>
        </div>
        <div className="flex text-center justify-center items-center mt-[40px]">
          <div className="2xl:w-[45%] xl:w-[45%] lg:w-[45%] w-full">
            <p className="text-[#000000] text-[16px] font-medium">
              Too many Nigerians at home and abroad have complained about scams,
              inavailabilty of flexible payment options, how stressful,
              ambiguous, and manual the property purchase process is, we heard
              you all, <span className="font-bold">over 100+ of you!</span>
            </p>
          </div>
        </div>
        <div className="overflow-hidden inline-flex group pt-[3em] whitespace-nowrap ">
          <div className="flex justify-between gap-3  h-[30%] animate-slide  group-hover:pause mr-3">
            <div className="w-[1px]  bg-gray-500" />
            <div className="   h-full min-h-[90px] inline-flex">
              <div className="flex justify-start items-start -mt-[8px]">
                {quote}
              </div>
              <div className="flex flex-col ml-[10px] gap-2  ">
                <h5 className="text-[#000000] text-[17px]">
                  I was scammed, by my wife!
                </h5>
                <p className="text-[12px] text-[#000000]">
                  ~ DIASPORAN LIVING IN IRELAND
                </p>
              </div>
            </div>
            <div className="w-[1px]  bg-gray-500" />
            <div className="  h-full min-h-[90px]  inline-flex">
              <div className="flex justify-start items-start -mt-[8px]">
                {quote}
              </div>
              <div className="flex flex-col ml-[10px] gap-2  ">
                <h5 className="text-[#000000] text-[17px]">
                  The form was too long!
                </h5>
                <p className="text-[12px] text-[#000000]">
                  ~ GOVERNMENT WORKER IN ABUJA
                </p>
              </div>
            </div>
            <div className="w-[1px]  bg-gray-500" />
            <div className="  h-full min-h-[90px]  inline-flex">
              <div className="flex justify-start items-start -mt-[8px]">
                {quote}
              </div>
              <div className="flex flex-col ml-[10px] gap-2  ">
                <h5 className="text-[#000000] text-[17px]">
                  I can’t track my repayments
                </h5>
                <p className="text-[12px] text-[#000000]">
                  ~ NGO WORKER WHO RECENTLY PURCHASED AN APARTMENT
                </p>
              </div>
            </div>
            <div className="w-[1px]  bg-gray-500" />
            <div className="  h-full min-h-[90px]  inline-flex">
              <div className="flex justify-start items-start -mt-[8px]">
                {quote}
              </div>
              <div className="flex flex-col ml-[10px] gap-2  ">
                <h5 className="text-[#000000] text-[17px]">
                  They sell to diasporan clients at higher prices, <br /> that’s
                  price discrimination. It is not fair.
                </h5>
                <p className="text-[12px] text-[#000000]">
                  ~ SOMEONE IN CANADA
                </p>
              </div>
            </div>
            <div className="w-[1px]  bg-gray-500" />
            <div className="  h-full min-h-[90px]  inline-flex">
              <div className="flex justify-start items-start -mt-[8px]">
                {quote}
              </div>
              <div className="flex flex-col ml-[10px] gap-2  ">
                <h5 className="text-[#000000] text-[17px]">
                  They gave me a housing list on paper to find the house. <br />{" "}
                  In today’s tech world? Haba!
                </h5>
                <p className="text-[12px] text-[#000000]">
                  ~ MORTGAGE SEEKER IN ABUJA, NIGERIA.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-3  h-[30%] animate-slide  group-hover:pause">
            <div className="w-[1px]  bg-gray-500" />
            <div className="   h-full min-h-[90px]] inline-flex">
              <div className="flex justify-start items-start -mt-[8px]">
                {quote}
              </div>
              <div className="flex flex-col ml-[10px] gap-2  ">
                <h5 className="text-[#000000] text-[17px]">
                  I was scammed, by my wife!
                </h5>
                <p className="text-[12px] text-[#000000]">
                  ~ DIASPORAN LIVING IN IRELAND
                </p>
              </div>
            </div>
            <div className="w-[1px]  bg-gray-500" />
            <div className="  h-full min-h-[90px]  inline-flex">
              <div className="flex justify-start items-start -mt-[8px]">
                {quote}
              </div>
              <div className="flex flex-col ml-[10px] gap-2  ">
                <h5 className="text-[#000000] text-[17px]">
                  The form was too long!
                </h5>
                <p className="text-[12px] text-[#000000]">
                  ~ GOVERNMENT WORKER IN ABUJA
                </p>
              </div>
            </div>
            <div className="w-[1px]  bg-gray-500" />
            <div className="  h-full min-h-[90px]  inline-flex">
              <div className="flex justify-start items-start -mt-[8px]">
                {quote}
              </div>
              <div className="flex flex-col ml-[10px] gap-2  ">
                <h5 className="text-[#000000] text-[17px]">
                  I can’t track my repayments
                </h5>
                <p className="text-[12px] text-[#000000]">
                  ~ NGO WORKER WHO RECENTLY PURCHASED AN APARTMENT
                </p>
              </div>
            </div>
            <div className="w-[1px]  bg-gray-500" />
            <div className="  h-full min-h-[90px]  inline-flex">
              <div className="flex justify-start items-start -mt-[8px]">
                {quote}
              </div>
              <div className="flex flex-col ml-[10px] gap-2  ">
                <h5 className="text-[#000000] text-[17px]">
                  They sell to diasporan clients at higher prices, <br /> that’s
                  price discrimination. It is not fair.
                </h5>
                <p className="text-[12px] text-[#000000]">
                  ~ SOMEONE IN CANADA
                </p>
              </div>
            </div>
            <div className="w-[1px]  bg-gray-500" />
            <div className="  h-full min-h-[90px]  inline-flex">
              <div className="flex justify-start items-start -mt-[8px]">
                {quote}
              </div>
              <div className="flex flex-col ml-[10px] gap-2  ">
                <h5 className="text-[#000000] text-[17px]">
                  They gave me a housing list on paper to find the house. <br />{" "}
                  In today’s tech world? Haba!
                </h5>
                <p className="text-[12px] text-[#000000]">
                  ~ MORTGAGE SEEKER IN ABUJA, NIGERIA.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-[2em] mb-[1.5em]">
          <h2 className="text-[#335F32] font-medium relative  text-[28px] 2xl:text-[45px] xl:text-[45px] lg:text-[43px] md:text-[40px] ">
            Here’s Why!
          </h2>
        </div>
        <div className="flex 2xl:justify-start xl:justify-start lg:justify-start md:justify-around justify-center   items-center flex-wrap gap-[25px]">
          {whys.map((w, i) => (
            <div
              key={i}
              className="group border 2xl:w-[300px] xl:w-[300px] lg:w-[300px] md:w-[300px] w-full border-[#D8D8D8] hover:border-[#4B4B4B] bg-[#FFFFFF] hover:bg-[#F5F5DE] justify-start 2xl:h-[350px] xl:h-[350px] lg:h-[350px] md:h-[350px] h-auto hover:shadow-md shadow-[#00000041] items-center rounded-[20px] p-[25px] flex flex-col gap-3 transition-all duration-300 ease-in-out why-card"
            >
              <div className="icon-wrap group w-[70px] h-[70px] bg-[#f3faf2] flex justify-center items-center border rounded-full border-[#335F32] p-[15px]">
                {w.icon}
              </div>
              <h5 className="group-hover:text-[#000000] text-[#335F32] text-[17px] text-center">
                {w.title}
              </h5>
              <p className="text-[#000000] text-[15px]">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
