"use client";

import { nanoid } from "nanoid";
import nextClsx from "next-clsx";
import { useState } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import Input from "./Input";

function Dropdown({ initialValue, options }) {
  const [inputFocused, setInputFocused] = useState(false);
  const [selected, setSelected] = useState(initialValue);
  const clsx = nextClsx(style, { inputFocused });

  return (
    <div className={clsx`ddc`}>
      <div className={clsx`ddic`}>
        <Input
          className={clsx`ddi`}
          type={"text"}
          width={"w-full"}
          maxLength={100}
          initialValue={selected}
          readOnly
          focusState={setInputFocused}
          blurDelay={250}
        />
        <div className={clsx`ddii`}>
          <RiArrowDropDownFill viewBox="7 10 10 10" size={8} className={clsx`ddii-up`} />
          <RiArrowDropDownFill viewBox="7 10 10 10" size={8} className={clsx`ddii-down`} />
        </div>
      </div>
      <div className={clsx`ddoc`}>
        {options.map(({ email }, i) => (
          <button type="button" onClick={() => setSelected(email)} key={i + nanoid()} className={clsx`ddo`}>
            {email}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;

const style = {
  ddc: {
    border: ` border-[2px] rounded-[6px]`,
    wrapper: `w-full relative`,
    [`border-transparent`]: false,
    [`border border-[#292c2d71]`]: true,
  },
  ddic: {
    wrapper: `relative w-full`,
  },
  "ddii": {
    hover: `hover:cursor-text pointer-events-none`,
    wrapper: `absolute top-[4px] right-0 flex flex-col gap-[4px] h-[2.25rem] w-[2.25rem] items-center justify-center`,
  },
  "ddii-up": {
    wrapper: `rotate-[180deg] text-tertiary`,
  },
  "ddii-down": {
    wrapper: `text-tertiary`,
  },
  "ddoc": {
    transition: ``,
    wrapper: `ddoc absolute overflow-hidden flex bg-main flex-col w-full items-start`,
    [`h-0 [visibility:hidden] border border-t-0 border-transparent`]: false,
    [`h-fit visible border border-gray border-t-0 rounded-b-md`]: true,
  },
  ddi: {
    [`rounded-b-none outline-transparent`]: true,
  },
  ddo: {
    hover: `hover:cursor-pointer`,
    wrapper: `w-full [&:is(:last-child)]:rounded-b-[2x]`,
    padding: `ps-4 pe-4 p-2`,
    hover: `hover:bg-gray-50/5 hover:cursor-pointer`,
    text: `text-start text-[1.2rem]`,
  },
};
