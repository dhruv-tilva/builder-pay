import React from "react";
import SubTitle from "./sub-title";
import Paragraph from "./paragraph";
import { Button } from "./button";

const BenefitCallSection = () => {
  return (
    <section className="px-4 lg:px-8 xl:px-36 2xl:px-0 md:text-center">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-0 rounded-lg bg-stone-950 py-10 md:py-20 lg:py-32">
        <SubTitle>Ideas, Best Practices & Examples</SubTitle>
        <Paragraph className="mt-2 md:mt-4 w-auto max-w-xl mx-auto">
          Learn how to generate more traffic on your website with our hands on
          articles, video’s and examples from the world’s best SEO marketers.
        </Paragraph>
        <Button className="mt-4 md:mt-8">Schedule a Call</Button>
      </div>
    </section>
  );
};

export default BenefitCallSection;
