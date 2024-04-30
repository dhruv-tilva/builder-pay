import React from "react";
import SubTitle from "./sub-title";
import { benefitsLists } from "../data";
import { CheckMark } from "@/icons/index";
import Paragraph from "./paragraph";
import Benefit from "@/assets/images/benefit.png";

const BenefitsSection = () => {
  return (
    <section className="px-4 md:flex md:items-center 2xl:justify-between md:gap-11 lg:gap-36 lg:px-24 xl:px-56 2xl:px-0 2xl:max-w-screen-2xl mx-auto py-7 xl:py-14 2xl:py-24">
      <div>
        <SubTitle>
          Benefits for Lenders,{" "}
          <span className="block">Builders, and Trades.</span>
        </SubTitle>
        <div className="mt-3 md:mt-6 space-y-2 lg:space-y-4 mb-7">
          {benefitsLists.map((benefit, index) => {
            return (
              <div key={index}>
                <div className="space-x-2 flex items-baseline">
                  <span className="w-5 h-4 flex items-center justify-center rounded-full bg-primary-600">
                    <CheckMark className="w-2.5 h-2.5 text-white" />
                  </span>
                  <Paragraph className="text-zinc-500 2xl:max-w-md">
                    {benefit}
                  </Paragraph>
                </div>
              </div>
            );
          })}
        </div>
        <a
          href="#"
          className="inline-block font-medium font-roboto text-sm text-white py-3 px-8 rounded-md border border-white"
        >
          Read More
        </a>
      </div>
      <div className="mt-10 w-1/2">
        <img src={Benefit} alt="" className="w-full" />
      </div>
    </section>
  );
};

export default BenefitsSection;
