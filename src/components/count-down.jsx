import React from "react";
import NumberAnimation from "./number-animation";

const CountDown = () => {
  return (
    <section className="px-4 lg:px-8 xl:px-20 2xl:px-0 py-4 lg:py-8">
      <div className="bg-primary-600 max-w-screen-2xl mx-auto rounded-2xl py-8 lg:py-16 lg:px-24 px-12 grid grid-cols-1 sm:grid-cols-4 gap-10 text-center">
        <NumberAnimation number={24} title="Fast Funding" unit="h" />
        <NumberAnimation number={100} title="Countries supported" unit="+" />
        <NumberAnimation number={15} title="Verified users" unit="k" />
        <NumberAnimation number={85} title="Tasks Paid" unit="k" />
      </div>
    </section>
  );
};

export default CountDown;
