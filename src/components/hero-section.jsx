import React from "react";
import Paragraph from "./paragraph";
import { Button } from "./button";
import Hero from "@/assets/images/hero.png";

const HeroSection = () => {
  return (
    <section className="px-4 lg:pr-8 lg:pl-24 xl:pl-44 py-7 xl:py-14 2xl:py-10 md:flex md:items-center md:justify-between">
      <div className="w-auto max-w-md md:justify-items-end">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-white">
          AI-Powered <span className="block">Construction</span>{" "}
          <span className="block">Financing</span>
        </h1>
        <Paragraph className="my-4 xl:my-8">
          A blockchain platform designed to manage risk, maximize productivity,
          and allocate task payments within 24 hours.
        </Paragraph>
        <Button>Schedule a Call</Button>
      </div>
      <div className="mt-8">
        <img src={Hero} alt="Hero" />
      </div>
    </section>
  );
};

export default HeroSection;
