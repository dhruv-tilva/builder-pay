import React, { useEffect, useState } from "react";
import Logo from "./logo";
import { CrossIcon, MenuIcon } from "@/icons/index";
import { Button } from "./button";
import { links } from "@/data";

export const Header = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [isShadow, setIsShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
      if (scrollPosition > scrollThreshold) {
        setIsShadow(true);
      } else {
        setIsShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      id="header"
      className={`font-roboto fixed transition-all duration-500 border-b bg-secondary-900 border-white whitespace-nowrap top-0 z-30 w-full ${
        isShadow && "shadow-header"
      }`}
    >
      <div className="flex items-center py-5 2xl:py-10 justify-between 2xl:max-w-screen-2xl mx-auto 2xl:px-0 px-4 lg:px-8 xl:px-20 w-full">
        <Logo
          onClick={() => {
            document
              .getElementById("header")
              .scrollIntoView({ behavior: "smooth", block: "center" });
          }}
          className="cursor-pointer"
        />
        <ul className="hidden md:flex gap-6 lg:gap-10 items-center justify-between justify-self-end">
          {links.map((link, index) => {
            return (
              <li
                key={link.id}
                className="text-sm 2xl:text-xl font-bold transition-all duration-200 text-white hover:text-primary-600"
              >
                <a href="#">{link.label}</a>
              </li>
            );
          })}
        </ul>
        <Button className="hidden md:inline-block">Request a Demo</Button>
        <div className="relative z-20 md:hidden -mt-2">
          <div className="flex items-center">
            {isToggle ? (
              <CrossIcon
                className="transition-all duration-200 h-9 w-9 cursor-pointer text-secondary-400 hover:text-primary-600"
                onClick={() => setIsToggle(false)}
              />
            ) : (
              <MenuIcon
                className="transition-all duration-200 h-10 w-10 cursor-pointer text-secondary-400 hover:text-primary-600"
                onClick={() => setIsToggle(true)}
              />
            )}
          </div>
          <ul
            className={`fixed top-0 bg-secondary-50 flex flex-col items-center justify-center gap-5 right-[-2px] bottom-0 overflow-hidden z-[-1] border-l-2 border-primary space-y-4 max-w-xl transition-width duration-300 ease-in-out delay-0, ${
              isToggle ? "w-full" : "w-0"
            }`}
          >
            <div className="p-6 space-y-10 sm:space-y-12 text-center">
              {links.map((link, index) => {
                return (
                  <li key={link.id}>
                    <a
                      href="#"
                      className="text-sm text-secondary-paragraphThin transition-all duration-200 hover:text-primary-600"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li className="mt-2">
                <Button>Request a Demo</Button>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
};
