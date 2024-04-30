import React from "react";
import Paragraph from "./paragraph";
import { Button } from "./button";
import Hero from "@/assets/images/hero.png";

const HeroSection = () => {
  return (
    <section className="px-4 lg:pr-8 lg:pl-24 xl:pl-36 2xl:px-0 2xl:max-w-screen-2xl mx-auto xl:pr-20 py-7 xl:py-14 2xl:py-10 md:flex md:items-center md:justify-between">
      <div className=" md:justify-items-end 2xl:w-full">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-[80px] font-poppins font-bold text-white">
          AI-Powered <span className="block">Construction</span>{" "}
          <span className="block">Financing</span>
        </h1>
        <Paragraph className="my-4 xl:my-8 w-auto max-w-md">
          A blockchain platform designed to manage risk, maximize productivity,
          and allocate task payments within 24 hours.
        </Paragraph>
        <Button>Schedule a Call</Button>
      </div>
      <div className="mt-8 md:mt-0 2xl:w-full">
        <img src={Hero} alt="Hero" className="2xl:w-full" />
      </div>
    </section>
  );
};

export default HeroSection;
