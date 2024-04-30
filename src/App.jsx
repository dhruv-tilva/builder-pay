import BenefitsSection from "./components/benefits-section";
import CountDown from "./components/count-down";
import { Header } from "./components/header";
import HeroSection from "./components/hero-section";
import Technology from "./components/technology";
import WhatWeDo from "./components/what-we-do";

function App() {
  return (
    <>
      <Header />
      <main className="mt-16 2xl:mt-36">
        <HeroSection />
        <WhatWeDo />
        <Technology />
        <CountDown />
        <BenefitsSection />
      </main>
    </>
  );
}

export default App;
