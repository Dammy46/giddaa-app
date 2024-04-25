"use client";
import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Chrome from "../../public/assets/svgs/chrome.svg";
import Dropbox from "../../public/assets/svgs/dropbox.svg";
import Reddit from "../../public/assets/svgs/reddit.svg";
import Vimeo from "../../public/assets/svgs/vimeo.svg";
import Viber from "../../public/assets/svgs/viber.svg";
import Handshake from "../../public/assets/svgs/handshake.svg";
import First from "../../public/assets/images/first-man.png";
import Second from "../../public/assets/images/second-man.png";
import Third from "../../public/assets/images/third-man.png";
import Fouth from "../../public/assets/images/fouth-woman.png";
import { circlePlay } from "@/utils/icons";

const TrustedBy = () => {
  const clients = [
    {
      image: First,
      name: "Lanre Edun",
      desc: "HEAD OF MARKETING AT BRAINS & HAMMERS",
    },
    {
      image: Second,
      name: "Kunle Fatimehin",
      desc: "DIRECTOR OF DIGITAL & INNOVATION AT KAIROS HOF",
    },
    {
      image: Third,
      name: "Emmanuel Uge",
      desc: "DIRECTOR OF SALES AT WIGWE INFRASTURUCTURE",
    },
    {
      image: Fouth,
      name: "Dooshima Anakaa",
      desc: "DIRECTOR OF FINANCE AT IKPAAHINDI VENTURES",
    },
  ];
  return (
    <section className="  ">
      <div className="bg-[#F5F5DE] py-[1.5em] px-[1em]">
        <div className=" 2xl:max-w-7xl xl:max-w-7xl lg:max-w-7xl md:max-w-6xl w-full mx-auto overflow-hidden">
          <div className="flex justify-start ">
            <h2 className="text-[#335F32] font-medium relative after:absolute after:bg-[url('../../public/assets/svgs/line.svg')] after:w-full after:h-[4px] after:bottom-0 after:right-0 text-[28px] 2xl:text-[45px] xl:text-[45px] lg:text-[43px] md:text-[40px] after:bg-no-repeat after:bg-center">
              Trusted By
            </h2>
          </div>
          <div className="overflow-hidden group pt-[3em] whitespace-nowrap ">
            <div className="inline-flex w-full justify-around animate-slide group-hover:pause">
              <Image src={Chrome} alt="chrome" width={50} height={50} />
              <Image src={Dropbox} alt="dropbox" width={50} height={50} />
              <Image src={Reddit} alt="reddit" width={50} height={50} />
              <Image src={Vimeo} alt="vimeo" width={50} height={50} />
              <Image src={Viber} alt="vimeo" width={50} height={50} />
            </div>
            <div className=" inline-flex w-full justify-around  animate-slide group-hover:pause">
              <Image src={Chrome} alt="chrome" width={50} height={50} />
              <Image src={Dropbox} alt="dropbox" width={50} height={50} />
              <Image src={Reddit} alt="reddit" width={50} height={50} />
              <Image src={Vimeo} alt="vimeo" width={50} height={50} />
              <Image src={Viber} alt="vimeo" width={50} height={50} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E9F5E7] relative px-[1em]">
        <div className=" 2xl:max-w-7xl xl:max-w-7xl lg:max-w-7xl md:max-w-6xl w-full mx-auto overflow-hidden">
          <div className="flex mb-[6em] justify-center">
            <div className="border-2 absolute top-0 rotate-[350deg] bg-[#FFFF]  border-[#335F32] rounded-[30px] inline-flex items-center px-[25px] py-[8px] shadow-md shadow-[#335F32]">
              <Image
                src={Handshake}
                alt="handshake"
                width={28}
                height={28}
                className="mr-[12px]"
              />
              <h6 className="text-[#335F32] text-[15px]">
                If They Trust Us, So Can You
              </h6>
            </div>
          </div>

          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            modules={[Navigation]}
            navigation={true}
            draggable={true}
            className="mySwiper"
          >
            {clients.map((c, i) => (
              <SwiperSlide key={i} className="shrink">
                <div className="group w-full h-[400px] cursor-pointer  overflow-hidden border border-[#335F32]  transition-all duration-300 ease-in-out rounded-[30px] relative flex items-end">
                  <div className="absolute top-0 right-0 m-[15px] z-[1]">
                    {circlePlay}
                  </div>
                  <Image src={c.image} alt="first" fill />
                  <div className="p-[20px] bg-[#00000070] z-[1] w-full">
                    <h5 className="text-[23px] text-[#FCFCFC]">{c.name}</h5>
                    <p className="text-[12px] text-[#FCFCFC]">{c.desc}</p>
                  </div>
                  <div className="absolute top-0 left-0 bottom-0 right-0 hidden  bg-[#00000070] z-[2] group-hover:flex flex-col items-center justify-center text-center p-[20px]  transition-all duration-300 ease-in-out">
                    <svg
                      viewBox="0 0 24 24"
                      width="80"
                      height="80"
                      fill="#335F32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="#fff"
                          strokeWidth="4"
                        ></circle>{" "}
                        <path
                          d="M15.4137 10.941C16.1954 11.4026 16.1954 12.5974 15.4137 13.059L10.6935 15.8458C9.93371 16.2944 9 15.7105 9 14.7868L9 9.21316C9 8.28947 9.93371 7.70561 10.6935 8.15419L15.4137 10.941Z"
                          stroke="#FFF"
                          strokeWidth="1"
                          fill="#fff"
                        ></path>{" "}
                      </g>
                    </svg>
                    <div className="mt-[15px]">
                      <h5 className="text-[25px] text-[#FCFCFC]">
                        {` Hear From ${c.name}`}
                      </h5>
                      <p className="text-[12px] text-[#FCFCFC]">{c.desc}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
