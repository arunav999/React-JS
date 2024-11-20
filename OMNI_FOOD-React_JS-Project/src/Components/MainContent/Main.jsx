import React from "react";
import Hero from "./Hero";
import Featured from "./Featured";
import How from "./How";
import Meals from "./Meals";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Cta from "./Cta";

const MainContent = () => {
  return (
    <main>
      <Hero />
      <Featured />
      <How />
      <Meals />
      <Testimonials />
      <Pricing />
      <Cta />
    </main>
  );
};

export default MainContent;
