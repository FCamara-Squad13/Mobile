import React from "react";

import Hero from "../../components/Hero";
import CardHolder from "../../components/CardHolder";

import homeHero from "../../assets/images/Wallpaper-hero-home.png";

const Home: React.FC = () => {
  return (
    <>
      <Hero
        title="Olá, Pamela!"
        subtitle="Que bom te ver por aqui :)"
        heroPath={homeHero}
      />
      <CardHolder title="O que estão doando na sua região" />
      <CardHolder title="Quem está precisando de doação na sua região" />
    </>
  );
};

export default Home;
