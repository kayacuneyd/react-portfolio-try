import React from "react";
import CallToAction from "../components/CallToAction";
import CarouselPart from "../components/CarouselPart";
import Facts from "../components/Facts";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <CallToAction />

      <Services />
      <Facts />
      <CarouselPart />
    </>
  );
};

export default Home;
