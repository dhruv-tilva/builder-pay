import React from "react";
import Logo from "./logo";
import Paragraph from "./paragraph";
import { FacebookIcon, LinkdnIcon, TwitterIcon } from "../icons";
import { footerLinks } from "../data";

const Footer = () => {
  return (
    <footer className="px-4 py-11 lg:px-8 xl:px-48 2xl:px-0">
      <div className="grid grid-cols-1 gap-7 md:grid-cols-3 xl:grid-cols-4 lg:gap-14 xl:gap-32 max-w-screen-2xl mx-auto">
        <div className="col-span-3 xl:col-span-1">
          <Logo />
          <Paragraph className="w-64 mt-4 mb-5 lg:mt-7 lg:mb-8">
            A cryptocurrency (or “crypto”) is a digital currency that can be
            used to buy goods and services.
          </Paragraph>
          <ul className="flex items-center gap-3">
            <li className="group">
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-white flex items-center justify-center"
              >
                <FacebookIcon className="text-stone-500 w-4 h-4 transition-all duration-200 group-hover:text-primary-600" />
              </a>
            </li>
            <li className="group">
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-white flex items-center justify-center"
              >
                <TwitterIcon className="text-stone-500 w-4 h-4 transition-all duration-200 group-hover:text-primary-600" />
              </a>
            </li>
            <li className="group">
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-white flex items-center justify-center"
              >
                <LinkdnIcon className="text-stone-500 w-4 h-4 transition-all duration-200 group-hover:text-primary-600" />
              </a>
            </li>
          </ul>
        </div>
        {footerLinks.map((item) => {
          return (
            <div key={item.id}>
              <h5 className="text-white font-semibold text-base md:text-lg font-poppins mb-3 md:mb-6 lg:mb-10">
                {item.title}
              </h5>
              <ul className="space-y-1 md:space-y-6">
                {item.links.map((link) => {
                  return (
                    <li key={link.id}>
                      <a
                        href=""
                        className="text-stone-500 font-normal font-roboto text-xs md:text-sm transition-all duration-200 hover:text-primary-600"
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <p className="text-xs text-stone-500 font-roboto mt-10 lg:mt-20 lg:text-sm font-normal max-w-screen-2xl mx-auto">
        Copyright © 2021 BuilderPay
      </p>
    </footer>
  );
};

export default Footer;
