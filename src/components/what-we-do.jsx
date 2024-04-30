import React from "react";
import SubTitle from "./sub-title";
import Paragraph from "./paragraph";
import { whatWeDo } from "../data";
import WhatWeDoCard from "./what-we-do-card";
import Curv from "@/assets/images/curv.svg";

const WhatWeDo = () => {
  return (
    <section className="bg-zinc-800 text-center">
      <div className="px-4 lg:px-8 xl:px-0 max-w-5xl mx-auto py-6 md:py-12 xl:py-24 relative">
        <div className="">
          <SubTitle>What We Do</SubTitle>
          <Paragraph className="mt-4 md:mt-7">
            We guarantee daily, project task payments to your trades within
            24-hours
          </Paragraph>
        </div>
        <div className="grid grid-cols-1 mt-8 md:mt-10 lg:mt-16 gap-4 md:grid-cols-3 md:gap-6 lg:gap-12 xl:gap-20 relative">
          {whatWeDo.map((item) => {
            return (
              <WhatWeDoCard
                key={item.id}
                url={item.url}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
        {/* <img src={Curv} alt="" className="hidden md:inline-block absolute" /> */}
      </div>
    </section>
  );
};

export default WhatWeDo;
