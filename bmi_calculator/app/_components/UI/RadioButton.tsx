import React from "react";
interface IRadioButton {
  htmlFor: string;
  name: string;
  value: string;
  text: string;
  onRadioChange: (value: string) => void;
  siSystem: string;
}
export const RadioButton: React.FC<IRadioButton> = ({
  htmlFor,
  name,
  value,
  text,
  onRadioChange,
  siSystem,
}) => {
  const isChecked = siSystem === value;
  return (
    <label
      className="w-full align-middle relative pl-[48px] py-[4px] cursor-pointer group"
      htmlFor={htmlFor}
    >
      <input
        type="radio"
        name={name}
        id={htmlFor}
        value={value}
        checked={isChecked}
        onChange={(e) => onRadioChange(e.target.value)}
        className=" hidden"
      />

      <span
        className={`h-[31px] w-[31px] rounded-[50%]  border-2 border-gunmetal block absolute left-0 top-[0px]  after:h-[8px] after:w-[8px]  after:bg-gunmetal/40 after:block after:content-[''] after:absolute after:left-[50%] after:top-[50%] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-[50%] after:scale-0 after:duration-500 transition-all ${
          isChecked
            ? " bg-blue/[15%] border-transparent"
            : "group-hover:border-blue"
        }`}
      ></span>
      <span
        className={`h-[15px] w-[15px] rounded-[50%]  bg-blue block absolute left-[8px] top-[8px] scale-0 ${
          isChecked && "scale-100"
        } duration-300`}
      ></span>

      <span className=" capitalize  text-bodyM_bold text-gunmetal">{text}</span>
    </label>
  );
};
