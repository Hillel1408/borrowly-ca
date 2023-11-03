"use client";

import { useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import { Button } from "@src/components/";

const Items = () => {
  const [showSort, setShowSort] = useState(false);

  const navItems = [
    { text: "Debt Consolidation" },
    { text: "Major Purchases" },
    { text: "Home Improvement" },
    { text: "Bad Credit Loans" },
    { text: "Same-Day Loans" },
  ];

  const sortItems = [
    "Popular",
    "Lowed APR (%) first",
    "Highest APR (%) first",
    "Lowest Amount ($) first",
    "Highest Amount ($) first",
  ];

  return (
    <div className="pb-6">
      <div className="container">
        <div className="p-4 bg-white grid grid-cols-[1fr_auto] gap-3 rounded-xl -translate-y-1/2 md:grid-cols-[1fr]">
          <input
            type="text"
            placeholder="Enter an amount"
            className="py-5 px-4 rounded-xl bg-[#F2F2F2] text-[16px] text-[#9198A1] leading-[125%]"
          />
          <Button text="Search" className="w-[310px] text-[16px] md:w-full" />
        </div>

        <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-[17px] lg:grid-cols-[1fr_1fr_1fr_1fr] md:grid-cols-[1fr_1fr_1fr] sm:grid-cols-[1fr_1fr]">
          {navItems.map((item) => (
            <div className="rounded-xl bg-white p-3">
              <div className="h-[72px] w-full bg-[#F3F3F3] mg-[5px] rounded-xl"></div>
              <span className="text-[12px] font-semibold leading-[166%]">
                {item.text}
              </span>
            </div>
          ))}
        </div>

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
              <div className="p-3 rounded-xl bg-white flex flex-col gap-3 items-start">
                <div className="border-2 border-[#DDD] rounded-[14px]">
                  <Image
                    src="/images/icon-1.svg"
                    alt=""
                    width={42}
                    height={42}
                  />
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
      </div>
    </div>
  );
};

export default Items;
