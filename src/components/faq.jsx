import React from "react";
import SubTitle from "./sub-title";
import Paragraph from "./paragraph";
import { fqaS } from "../data";
import FaqCard from "./faq-card";

const FAQ = () => {
  //   document.querySelectorAll(".accordion-item").forEach((item) => {
  //     item
  //       .querySelector(".accordion-item-header")
  //       .addEventListener("click", function () {
  //         debugger;
  //         console.log(item);
  //         item.classList.toggle("open");
  //       });
  //     // console.log(document.querySelectorAll(".accordion-item"));
  //   });
  const firstFAQs = fqaS.slice(0, fqaS.length / 2);
  const secondFAqs = fqaS.slice(fqaS.length / 2);

  return (
    <section className="px-4 py-11 lg:px-8 lg:py-20">
      <SubTitle className="text-center">FAQ</SubTitle>
      <Paragraph className="text-secondary-500 mt-3 md:mt-6 text-center">
        Our secure Micro-Draw technology allows faster payments
      </Paragraph>
      {/* Accordion for mobile screen */}
      <div className="mt-5 accordion grid grid-cols-1 gap-4 sm:hidden">
        {fqaS.map((faq) => {
          return (
            <FaqCard
              key={faq.id}
              title={faq.title}
              subTitle={faq.subTitle}
              description={faq.description}
              id={faq.id}
            />
          );
        })}
      </div>
      {/* Accordion for tablet and desktop screen */}
      <div className="hidden sm:grid grid-cols-2 gap-4 mt-10 max-w-7xl mx-auto">
        <div className="mt-5 accordion grid grid-cols-1 gap-4">
          {firstFAQs.map((faq) => {
            return (
              <FaqCard
                key={faq.id}
                title={faq.title}
                subTitle={faq.subTitle}
                description={faq.description}
                id={faq.id}
              />
            );
          })}
        </div>
        <div className="mt-5 accordion grid grid-cols-1 gap-4">
          {secondFAqs.map((faq) => {
            return (
              <FaqCard
                key={faq.id}
                title={faq.title}
                subTitle={faq.subTitle}
                description={faq.description}
                id={faq.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
