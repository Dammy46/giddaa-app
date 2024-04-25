import Image from "next/image";
import React from "react";
import Avatars from "../../public/assets/images/avatars.png";
import { arrow, whatsapp } from "@/utils/icons";
import { footerLinks, icons } from "@/utils/data";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <section className="pt-[3em] bg-[#335F32] px-[1em] border-t-[10px] border-[#D8D8D8]">
        <div className="2xl:max-w-7xl xl:max-w-7xl lg:max-w-7xl md:max-w-6xl w-full mx-auto">
          <div className="flex justify-center">
            <button className="outline-none focus:outline-none active:outline-none focus:ring-o active:ring-0 px-[2em] py-[1em] bg-[#F3FAF2] rounded-[60px] text-[#335F32] h-full font-semibold hover:opacity-[.5] w-auto transition-all duration-300 ease-in-out flex flex-col justify-center items-center gap-2">
              <Image src={Avatars} alt="avatars" width={90} height={90} />
              <span className="inline-flex justify-between items-center gap-2">
                {whatsapp} Join Our WhatsApp Community {arrow}
              </span>
            </button>
          </div>
          <div className="flex justify-start flex-wrap items-start mt-[40px] gap-[20px]">
            {footerLinks.map((fLink, i) => (
              <div
                className="flex justify-start flex-col gap-3 2xl:w-[18%] xl:w-[18%] lg:w-[20%] md:w-[30%] w-full"
                key={i}
              >
                <h5 className="text-[#FFFFFF] text-[24px]">{fLink.title}</h5>
                <div className="flex flex-col justify-start gap-2">
                  {fLink.links.map((l, sI) => (
                    <Link href={"#"} key={sI}>
                      <div
                        className="text-[14px] text-[#FFFFFF]"
                        dangerouslySetInnerHTML={{
                          __html: l,
                        }}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 pt-[3em] pb-[1.7em]">
          {icons.map((c, i) => (
            <span key={i}>{c}</span>
          ))}
        </div>
      </section>
      <div className="flex justify-center items-center bg-[#F5F5DE] py-2">
        <p className="text-[16px] font-semibold text-[#335F32]">
          PROPERTY OF GIDDAA INC.
        </p>
      </div>
    </>
  );
};

export default Footer;
