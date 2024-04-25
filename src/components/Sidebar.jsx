"use client";
import React from "react";
import Logo from "../../public/assets/images/giddaa-logo.png";
import Image from "next/image";
import Link from "next/link";
import { logOut, trans } from "@/utils/icons";
import useSignOut from "@/hooks/useSignout";
const Sidebar = ({ show, setter }) => {
  const { handleSignOut } = useSignOut();
  const className =
    "bg-[#F0F0F0] w-[300px] shadow-md flex flex-col shadow-[#00000029] transition-[margin-left] ease-in-out duration-500 fixed  top-0 bottom-0 left-0 z-40 pl-[15px] pt-[25px] pr-2 pb-[1em]";

  const appendClass = show ? " ml-0" : " ml-[-350px] md:ml-0";
  return (
    <div className={`${className}${appendClass}`}>
      <div className="p-2 flex">
        <Image src={Logo} alt="giddaa-logo" width={80} height={80} />
      </div>
      <div className="flex flex-col mt-[20px]">
        <Link
          href={"#"}
          onClick={() => setter(!show)}
          className="inline-flex items-center justify-start gap-2 text-[#335F32] text-[16px] border-r-2 border-[#335F32]"
        >
          {trans} TRANSACTIONS & EARNINGS
        </Link>
      </div>
      <div className="mt-auto border-t-2 border-[#D8D8D8] pt-[1.5em] px-[1.5em]">
        <button
          className="inline-flex justify-start items-center gap-[15px] text-[15px] text-[#C11111] font-semibold"
          onClick={() => handleSignOut()}
        >
          LOG OUT {logOut}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
