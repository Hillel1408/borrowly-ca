"use client";

import { useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import { Button, LoanPurposes } from "@src/components/";

const Sort = () => {
  const [showSort, setShowSort] = useState(false);

  const sortItems = [
    "Popular",
    "Lowed APR (%) first",
    "Highest APR (%) first",
    "Lowest Amount ($) first",
    "Highest Amount ($) first",
  ];

  return (
    <div className="pt-6">
      <div className="relative">
        <button
          onClick={() => {
            setShowSort((prev) => !prev);
          }}
          className="text-[14px] font-semibold leading-[142%] flex items-center gap-1"
        >
          <svg className="h-5 w-5" aria-hidden="true">
            <use xlinkHref="/sprites/sprite.svg#sort"></use>
          </svg>
          Sort
        </button>

        <ul
          className={classNames(
            "p-3 bg-white w-[240px] rounded-xl shadow-lg shadow-black-500/50 absolute top-6 duration-200",
            showSort ? "visible opacity-100" : "invisible opacity-0"
          )}
        >
          {sortItems.map((item, index) => (
            <li
              key={index}
              className={classNames(
                index === 0 && "bg-[#F3F3F3]",
                "px-[15px] py-[6px] cursor-pointer hover:bg-[#F3F3F3] rounded-xl duration-200"
              )}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

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
    </div>
  );
};

export default Sort;
