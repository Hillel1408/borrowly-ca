"use client";

import classNames from "classnames";

const Button = ({ text, className }: { text: string; className?: string }) => {
  return (
    <button
      className={classNames(
        className,
        "p-4 bg-[#000] rounded-lg text-white leading-[142%] font-semibold"
      )}
    >
      {text}
    </button>
  );
};

export default Button;
