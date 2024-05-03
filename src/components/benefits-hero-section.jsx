import React from "react";
import Paragraph from "./paragraph";
import BenefitHeroSection from "@/assets/images/benefits-hero-section.png";
import { Button } from "./button";

const BenefitsHeroSection = () => {
  return (
    <section className="px-4 lg:pr-8 lg:pl-24 xl:pl-36 2xl:px-0 2xl:max-w-screen-2xl mx-auto xl:pr-20 py-16 xl:py-32 md:flex md:items-center md:justify-between">
      <div className=" md:justify-items-end">
        <Paragraph>The all-in-one SEO tool for Business.</Paragraph>
        <h1 className="text-3xl md:text-4xl lg:text-5xl lg:leading-tight 2xl:text-7xl mt-4 mb-6 lg:mb-12 lg:mt-8 font-poppins font-bold text-white">
          The SEO tool you <span className="block"> need to grow your </span>{" "}
          <span className="block">traffic and revenue.</span>
        </h1>
        <Button>Schedule a Call</Button>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2 xl:flex xl:justify-end">
        <img src={BenefitHeroSection} alt="Hero" className="2xl:w-full" />
      </div>
    </section>
  );
};

export default BenefitsHeroSection;
