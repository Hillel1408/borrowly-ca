"use client";

import { useState } from "react";
import classNames from "classnames";

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
  );
};

export default Sort;
