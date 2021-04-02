import React from "react";
import "./style.css";

import CardHolder from "../../components/CardHolder";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Search from "../../components/SearchBar";

const Teste: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Search />
      <CardHolder />
      <CardHolder />
      <Footer />
    </>
  );
};

export default Teste;
