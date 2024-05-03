import React from "react";
import CheckMark from "@/assets/images/check-mark.svg";
import Paragraph from "./paragraph";
import SubTitle from "./sub-title";
import SeoOne from "@/assets/images/seo-1.png";

const SeoSection = ({ image_url, id, subTitle, titles, lists }) => {
  return (
    <section
      className={`px-4 py-11 xl:py-24 lg:px-8 xl:px-36 2xl:px-0 max-w-screen-2xl mx-auto md:flex md:items-center md:gap-10 xl:justify-between ${
        !!(id % 2) ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className="xl:">
        <Paragraph className="italic">{subTitle}</Paragraph>
        <SubTitle className="mt-3 md:text-xl xl:mt-6 2xl:mt-8 2xl:text-5xl">
          {titles.map((item) => {
            return <p key={item.id}>{item.label}</p>;
          })}
        </SubTitle>
        <ul className="mt-5 md:mt-7 2xl:mt-9 space-y-2 md:space-y-4">
          {lists.map((list) => {
            return (
              <li
                key={list.id}
                className="text-xs md:text-sm lg:text-base 2xl:text-lg text-white font-poppins flex items-start md:items-center gap-1"
              >
                <img src={CheckMark} alt="" className="2xl:w-7 2xl:h-7" />
                {list.label}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-6 md:mt-0 2xl:w-1/2">
        <img src={image_url} alt="" className="w-full" />
      </div>
    </section>
  );
};

export default SeoSection;
