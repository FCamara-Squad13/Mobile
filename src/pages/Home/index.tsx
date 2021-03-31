import React from "react";
import "./style.css";

import Hero from "../../components/Hero";
import CardHolder from "../../components/CardHolder";
import Footer from "../../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <CardHolder />
      <Footer />
    </>
  );
};

export default Home;
