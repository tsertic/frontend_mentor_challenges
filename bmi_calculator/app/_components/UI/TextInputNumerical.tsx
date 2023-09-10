"use client";
import React, { useState } from "react";
interface ITextInputNumerical {
  value: string;
  onChange: (value: string, type?: string) => void;
  name: string;
  text: string;
  htmlFor: string;
  placeholder: string;
}
export const TextInputNumerical: React.FC<ITextInputNumerical> = ({
  value,
  onChange,
  name,
  text,
  htmlFor,
  placeholder,
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <label
      htmlFor={htmlFor}
      className={`flex gap-[24px] px-[24px] py-[20px] ${
        focused && "border-blue"
      }  border-2 text-headingM w-full rounded-[12px]`}
    >
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        id={htmlFor}
        name={name}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => onChange(e.target.value, e.target.name)}
        className=" border-none outline-none w-full text-gunmetal"
      />
      <span className="text-blue">{text}</span>
    </label>
  );
};
