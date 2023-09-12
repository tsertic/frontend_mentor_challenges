"use client";
import { ValidateEmail } from "@/lib";
import React, { useEffect, useState, FormEventHandler } from "react";

export const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [notValidEmail, setNotValidEmail] = useState(true);
  const [submitedForm, setSubmitedForm] = useState(false);
  useEffect(() => {
    if (!ValidateEmail(email)) {
      setNotValidEmail(true);
    } else {
      setNotValidEmail(false);
    }
  }, [email]);

  const handleSubmitForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setSubmitedForm(true);
    setEmail("");
    setTimeout(() => setSubmitedForm(false), 1000);
  };
  return (
    <form className="relative w-full flex flex-col" onSubmit={handleSubmitForm}>
      <div className="flex ">
        <input
          type="text"
          value={email}
          placeholder="Updates in your inbox..."
          onChange={(e) => setEmail(e.target.value)}
          className={`pl-[11px] py-[11px] mr-[8px] bg-base-100 text-primary-200 w-full xl:min-w-[200px]  border-2 font-normal ${
            notValidEmail && email !== "" && "border-primary-200"
          } outline-none rounded-[22px] text-[13px] leading-normal`}
        />
        <button
          type="submit"
          disabled={notValidEmail}
          className={`
        bg-primary text-primary-content hover:bg-primary-focus  text-[13px] leading-normal font-bold  py-[12px] px-[23px] rounded-[22px] ${
          notValidEmail && "cursor-not-allowed"
        }`}
        >
          Go
        </button>
      </div>
      <span
        className={`${
          notValidEmail && email !== "" ? "block" : "hidden"
        } text-primary-200 text-[10px] pl-[10px] absolute bottom-[-25px] left-0`}
      >
        Please insert a valid email
      </span>
      <span
        className={`${
          submitedForm ? "block" : "hidden"
        } text-[#198754] text-[10px] pl-[10px] absolute bottom-[-25px] left-0`}
      >
        Email submited
      </span>
    </form>
  );
};
