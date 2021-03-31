import React from "react";
import "./style.css";

import Hero from "../../components/Hero";
import Card from "../../components/Card";
import HomeCard from "../../components/HomeCard";
import Footer from "../../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <Card />
        <HomeCard />
      </div>
      <Footer />
    </>
  );
};

export default Home;
