import React from "react";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/service";
import Portfolio from "./components/portfolio";

function Page() {
  return (
    <div>
      <Hero />
      <About />
      <Services  />
      <Portfolio />
    </div>
  );
}

export default Page;
