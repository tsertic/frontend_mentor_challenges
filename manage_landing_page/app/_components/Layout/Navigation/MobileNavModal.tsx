import { navigation_links } from "@/constants";
import Link from "next/link";
import React from "react";
interface IMobileNavModal {
  show: boolean;
  closeModal: () => void;
}
export const MobileNavModal: React.FC<IMobileNavModal> = ({
  show,
  closeModal,
}) => {
  return (
    <div
      className={`absolute ${
        show ? "top-0 " : "top-[-150%] "
      } left-0 w-screen h-screen backdrop-shadow z-10 flex justify-center pt-[103px] px-[24px]  duration-300 transition-all`}
      onClick={closeModal}
    >
      <div className="bg-base-100 w-full h-fit py-[40px] px-[120px] flex-col-center gap-[24px] modal-shadow rounded-[4px] ">
        {navigation_links.map((item) => {
          return (
            <Link
              href={item.path}
              key={item._id}
              className="text-base-content text-navMobile capitalize"
            >
              {item.text}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
