import React from "react";
import SubTitle from "./sub-title";
import Paragraph from "./paragraph";
import MobileImage from "@/assets/images/mobile.png";
import { Button } from "./button";
import CallIcon from "../icons/call-icon";

const CallSection = () => {
  return (
    <section className="px-4 py-8 lg:px-8 lg:py-16 xl:px-20 2xl:px-0 relative">
      <div className="bg-secondary-950 rounded-xl px-4 py-8 md:px-11 lg:px-24 lg:py-12 md:flex gap-10 justify-between items-center max-w-screen-2xl mx-auto">
        <div>
          <SubTitle>Schedule a Call</SubTitle>
          <Paragraph className="mt-3 md:mt-6 mb-5 text-white w-auto max-w-96">
            Discover how specific cryptocurrencies work — and get a bit of each
            crypto to try out for yourself.
          </Paragraph>
          <Button>Schedule Call</Button>
        </div>
        <div className="mt-5 md:mt-0">
          <img src={MobileImage} alt="" className="w-full" />
        </div>
      </div>
      <div className="hidden absolute h-14 w-14 xl:flex right-2.5 2xl:right-7 cursor-pointer bottom-6 items-center justify-center bg-primary-600 rounded-full">
        <CallIcon className="h-7 w-7 text-black" />
      </div>
    </section>
  );
};

export default CallSection;
