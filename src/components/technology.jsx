import React from "react";
import SubTitle from "./sub-title";
import TechnologyImage from "@/assets/images/technology.png";
import TechnologyOne from "@/assets/images/technology-1.svg";
import TechnologyTwo from "@/assets/images/technology-2.svg";
import Paragraph from "./paragraph";

const Technology = () => {
  return (
    <section className="px-4 lg:pr-8 lg:pl-24 xl:pl-36 2xl:px-0 2xl:max-w-screen-2xl mx-auto xl:pr-20 py-7 xl:py-14 2xl:py-24">
      <SubTitle className="mb-3 text-center lg:mb-6">
        Old vs New Technology
      </SubTitle>
      <Paragraph className="text-center w-auto max-w-md mx-auto text-secondary-500 2xl:max-w-lg">
        Our secure Micro-Draw technology allows faster payments at the daily
        task level, lower financing & insurance costs, and helps attract the
        best construction trades.
      </Paragraph>
      <div className="mt-11 md:flex 2xl:justify-between gap-11 xl:gap-24 2xl:gap-56 xl:mt-20 items-center">
        <img
          src={TechnologyImage}
          alt=""
          className="inline-block justify-self-end 2xl:justify-self-start md:w-1/2 2xl:w-full"
        />
        <div className="mt-8 md:mt-0 w-auto max-w-md md:w-1/2 2xl:max-w-xl">
          <SubTitle>
            Eliminate all the <span className="block">expensive overhead</span>
          </SubTitle>
          <Paragraph className="mt-3 lg:mt-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Paragraph>
          <div className="space-y-3 mt-5 lg:mt-10">
            <div className="flex items-start gap-3 md:gap-6">
              <div className="w-14 h-10 md:h-14 flex items-center justify-center rounded-full bg-white">
                <img
                  src={TechnologyOne}
                  alt=""
                  className="w-5 h-5 md:h-7 md:w-7"
                />
              </div>
              <div>
                <h6 className="text-base md:text-lg lg:text-xl font-poppins text-white font-medium mb-2">
                  Title Lorem Ipsum
                </h6>
                <Paragraph className="w-60 xl:w-64">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </Paragraph>
              </div>
            </div>
            <div className="flex items-start gap-3 md:gap-6">
              <div className="w-14 h-10 md:h-14 flex items-center justify-center rounded-full bg-white">
                <img
                  src={TechnologyTwo}
                  alt=""
                  className="w-5 h-5 md:w-7 md:h-7 "
                />
              </div>
              <div>
                <h6 className="text-base md:text-lg lg:text-xl font-poppins text-white font-medium mb-2">
                  Title Lorem Ipsum
                </h6>
                <Paragraph className="w-60 xl:w-64">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
