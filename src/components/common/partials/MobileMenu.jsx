import ALink from "@/components/features/ALink";
import { useState } from "react";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);

  const Menu = [
    {
      title: "Shipping",
      url: "/",
    },
    {
      title: "Tracking",
      url: "/",
    },
    {
      title: "Design & Print",
      url: "/",
    },
    {
      title: "Locations",
      url: "/",
    },
    {
      title: "Support",
      url: "/",
    },
  ];

  return (
    <>
      <div
        className="space-y-[7px] cursor-pointer lg:hidden mr-1"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <div className="w-6 h-[2px] bg-white"></div>
        <div className="w-6 h-[2px] bg-white"></div>
        <div className="w-6 h-[2px] bg-white"></div>
      </div>

      {toggle && (
        <div
          onClick={() => {
            setToggle(false);
          }}
          className="overlay fixed left-0 top-0 bottom-0 right-0 bg-black/50 z-10"
        ></div>
      )}

      <div
        className={`${
          toggle ? "" : "-translate-x-[300px]"
        }  transition-all lg:hidden custom-scrollbar py-5 fixed w-[300px] bg-black text-white h-screen left-0 top-0 bottom-0 z-20`}
      >
        <div className="menu-wrapper">
          {Menu?.map((item, index) => (
            <div className="relative mb-5" key={index}>
              <ALink
                href={item?.url}
                className="block px-4 py-2 font-bold"
              >
                <span>{item?.title}</span>
              </ALink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
