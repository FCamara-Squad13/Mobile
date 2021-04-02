import React from "react";

import Hero from "../../components/Hero";
import CardHolder from "../../components/CardHolder";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import homeHero from "../../assets/images/Wallpaper-hero-home.png";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
<<<<<<< HEAD
      <Hero title="Olá, Pamela!" subtitle="Que bom te ver por aqui :)" />
=======
      <Hero
        title="Olá, Pamela!"
        subtitle="Que bom te ver por aqui :)"
        heroPath={homeHero}
      />
>>>>>>> 7adf85b06b0cbd457054fb001ee47e57bb52254f
      <CardHolder title="O que estão doando na sua região" />
      <CardHolder title="Quem está precisando de doação na sua região" />
      <Footer />
    </>
  );
};

export default Home;
