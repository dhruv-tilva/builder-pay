import React from "react";
import HeroSection from "../components/hero-section";
import WhatWeDo from "../components/what-we-do";
import Technology from "../components/technology";
import CountDown from "../components/count-down";
import HomeBenefits from "../components/home-benefits";
import { Video } from "../components/video";
import FAQ from "../components/faq";
import CallSection from "../components/call-section";

const Home = () => {
  return (
    <main className="mt-16 2xl:mt-36">
      <HeroSection />
      <WhatWeDo />
      <Technology />
      <CountDown />
      <HomeBenefits />
      <Video />
      <FAQ />
      <CallSection />
    </main>
  );
};

export default Home;
