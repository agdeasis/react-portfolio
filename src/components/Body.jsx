import React from "react";
import Banner from "./home/Banner";
import About from "./home/About";
import Service from "./home/Service";
import Tools from "./home/Tools";
import Portfolio from "./home/Portfolio";
import Experience from "./home/Experience";
import Contact from "./home/Contact";

const Body = () => {
  return (
    <div className="x-wrapper">
      <Banner />
      <About />
      <Service />
      <Tools />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
};

export default Body;
