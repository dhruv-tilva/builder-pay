import React from "react";
import SubTitle from "./sub-title";
import Paragraph from "./paragraph";
import FullNative from "@/assets/images/fully-native.png";
import { builders, landers, trades } from "../data";

const BenefitsSection = () => {
  return (
    <section className="px-4 lg:px-8 py-11 lg:py-24 max-w-screen-2xl mx-auto xl:px-36 2xl:px-0">
      <div>
        <SubTitle className="md:text-center">
          Everyone Benefits with BuilderPay
        </SubTitle>
        <Paragraph className="mt-3 md:text-center">
          A win for the lender or Investor, a win for the prime or general
          contractor and a win for the trades (subcontractors/suppliers).
        </Paragraph>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h4 className="pb-2 w-full border-b border-white text-white font-semibold font-poppins text-base md:text-lg lg:text-xl xl:text-2xl uppercase">
            Lenders
          </h4>
          <div className="mt-4 space-y-7">
            {landers.map((item) => {
              return (
                <div
                  key={item.id}
                  className="rounded-md p-6 md:p-8 xl:p-12 bg-zinc-800"
                >
                  <img src={item.image_url} alt="" />
                  <h5 className="font-semibold text-sm mt-3 md:mt-6 text-white italic md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-poppins">
                    {item.title}
                  </h5>
                  <p className="text-xs md:text-sm font-poppins mt-3 md:mt-5 text-secondary-400 ">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h4 className="pb-2 w-full border-b border-white text-white font-semibold font-poppins text-base md:text-lg lg:text-xl xl:text-2xl uppercase">
            Builders
          </h4>
          <div className="mt-4 space-y-7">
            {builders.map((item) => {
              return (
                <div
                  key={item.id}
                  className="rounded-md p-6 md:p-8 xl:p-12 bg-secondary-950"
                >
                  <img src={item.image_url} alt="" />
                  <h5 className="font-semibold text-sm mt-3 md:mt-6 text-white italic md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-poppins">
                    {item.title}
                  </h5>
                  <p className="text-xs md:text-sm font-poppins mt-3 md:mt-5 text-secondary-400 ">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h4 className="pb-2 w-full border-b border-white text-white font-semibold font-poppins text-base md:text-lg lg:text-xl xl:text-2xl uppercase">
            trades
          </h4>
          <div className="mt-4 space-y-7">
            {trades.map((item) => {
              return (
                <div
                  key={item.id}
                  className="rounded-md p-6 md:p-8 xl:p-12 bg-zinc-800"
                >
                  <img src={item.image_url} alt="" />
                  <h5 className="font-semibold text-sm mt-3 md:mt-6 text-white italic md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-poppins">
                    {item.title}
                  </h5>
                  <p className="text-xs md:text-sm font-poppins mt-3 md:mt-5 text-secondary-400 ">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
