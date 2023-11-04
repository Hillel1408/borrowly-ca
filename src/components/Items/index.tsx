"use client";

import Image from "next/image";
import { Button } from "@src/components/";

const Items = () => {
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr] mt-6 gap-[17px] lg:grid-cols-[1fr_1fr_1fr] md:grid-cols-[1fr_1fr] sm:grid-cols-[1fr]">
      {new Array(12).fill("").map((item, index) => (
        <div
          key={index}
          className="p-3 rounded-xl bg-white flex flex-col gap-3 items-start"
        >
          <div className="border-2 border-[#DDD] rounded-[14px]">
            <Image src="/images/icon-1.svg" alt="" width={42} height={42} />
          </div>

          <span className="text-[#171D23] text-[10px] uppercase px-2 py-1 bg-[#2BB] rounded-[20px]">
            BEST OFFER
          </span>

          <ul className="flex flex-col gap-2 w-full">
            <li className="flex justify-between items-center gap-1">
              <span className="text-[#9198A1] text-[13px] leading-[123%]">
                Amount
              </span>
              <span className="text-[15px] leading-[120%] font-semibold">
                $6000 CAD
              </span>
            </li>
          </ul>

          <Button text="Apply now" className="w-full text-[14px]" />
        </div>
      ))}
    </div>
  );
};

export default Items;
