import React from "react";

import Hero from "../../components/Hero";
import homeHero from "../../assets/images/Wallpaper-hero-home.png";

const PublicarAnuncio: React.FC = () => {
  return (
    <>
      <Hero
        title="Aqui você cria seu anúncio, então vamos começar!"
        subtitle=""
        heroPath={homeHero}
      />
    </>
  );
};

export default PublicarAnuncio;
