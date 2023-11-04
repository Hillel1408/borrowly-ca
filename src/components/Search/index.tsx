"use client";

import { Button } from "@src/components/";

const Search = () => {
  return (
    <div className="p-4 bg-white grid grid-cols-[1fr_auto] gap-3 rounded-xl -translate-y-1/2 md:grid-cols-[1fr]">
      <input
        type="text"
        placeholder="Enter an amount"
        className="py-5 px-4 rounded-xl bg-[#F2F2F2] text-[16px] text-[#9198A1] leading-[125%]"
      />
      <Button text="Search" className="w-[310px] text-[16px] md:w-full" />
    </div>
  );
};

export default Search;
