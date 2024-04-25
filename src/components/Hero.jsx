import Image from "next/image";
import React from "react";
import HeroBg from "../../public/assets/images/hero-bg.png";
const Hero = () => {
  return (
    <section className="hero   bg-[#FFFFFF] mt-[5em] md:mt-[9.2em]">
      <div className="2xl:max-w-7xl xl:max-w-7xl lg:max-w-10xl md:max-w-6xl w-full flex justify-between items-start xl:flex-row lg:flex-row md:flex-row flex-col  mx-auto">
        <div className="xl:w-[45%] lg:w-[50%] md:w-[50%] w-full 2xl:pl-0 xl:pl-0  pl-[1em] pt-[20px] pr-[20px] pb-[20px]">
          <h2 className="xl:text-[42px] lg:text-[40px] text-[28px]">
            <span className="text-[#000000]">
              Securely and Affordably Own a Home in Nigeria.
            </span>
            <br />
            <span className="text-[#335F32]">
              We Serve Nigerians Across the Globe.
            </span>
          </h2>
          <p className="text-[16px] mt-[15px] mb-[20px] text-[#000000]">
            Experience confidence when buying a home in Nigeria whether you’re
            in Nigeria or <span className="font-semibold">Abroad</span>! Enjoy
            peace of mind with legitimate transactions, straightfoward
            processes, and a variety of flexible payment options directly from
            top developers and banks.
          </p>
          <div className="flex justify-between items-center gap-4 xl:flex-row lg:flex-row flex-col-reverse">
            <button
              className="outline-none focus:outline-none active:outline-none focus:ring-o active:ring-0 px-[2em] py-[1em] bg-[#335F32] rounded-[30px] text-[#ffff] h-full font-semibold hover:opacity-[.5] xl:w-auto lg:w-auto w-full transition-all duration-300 ease-in-out"
              aria-label="login"
            >
              Find a Home
            </button>
            <button
              className="outline-none focus:outline-none active:outline-none focus:ring-o active:ring-0 px-[2em] py-[1em] border-2 border-[#335F32] rounded-lg text-[#335F32] flex-1 xl:w-auto lg:w-auto w-full h-full font-semibold hover:opacity-[.5] transition-all duration-300 ease-in-out whitespace-nowrap"
              aria-label="login"
            >
              10,000 People Have Seen This
            </button>
          </div>
        </div>
        <div className="xl:w-[60%] lg:w-[50%] md:w-[50%] w-full 2xl:min-h-[645px] xl:min-h-[645px] lg:min-h-[645px] min-h-[518px] xl:block lg:block md:block hidden relative 2xl:-mr-[128px]  xl:-mr-[80px]">
          <Image src={HeroBg} alt="hero-bg" fill />
        </div>
      </div>
    </section>
  );
};

export default Hero;
