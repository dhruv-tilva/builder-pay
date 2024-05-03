import React from "react";
import BenefitsHeroSection from "../components/benefits-hero-section";
import ImageGrid from "../components/image-grid";
import BenefitsSection from "../components/benefits-section";
import SeoSection from "../components/seo-section";
import { seoS } from "../data";
import BenefitCallSection from "../components/benefit-call-section";

const Benefits = () => {
  return (
    <main className="mt-20 2xl:mt-36">
      <BenefitsHeroSection />
      <ImageGrid />
      <BenefitsSection />
      {seoS.map((seo) => {
        return (
          <SeoSection
            image_url={seo.image_url}
            key={seo.id}
            id={seo.id}
            lists={seo.lists}
            titles={seo.titles}
            subTitle={seo.subTitle}
          />
        );
      })}
      <BenefitCallSection />
    </main>
  );
};

export default Benefits;
