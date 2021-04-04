import React from "react";

import CardHolder from "../../components/CardHolder";
import Hero from "../../components/Hero";
import Card from "../../components/Card";
import CategorySearch from "../../components/CategorySearch";
import ButtonNextPage from "../../components/ButtonNextPage";
import ButtonPublishAd from "../../components/ButtonPublicarAnuncio";
import canetas from "../../assets/images/Canetas.png";
import lapis from "../../assets/images/Lapis.jpg";
import lancheira from "../../assets/images/Lancheira.jpg";

import homeHero from "../../assets/images/Wallpaper-hero-home.png";
import ErrorModal from "../../components/ErrorModal";
import ConfirmationModal from "../../components/ConfirmationModal";

const Teste: React.FC = () => {
  return (
    <>
      <Hero title="" subtitle="" heroPath="" />
      <ErrorModal />
      <ConfirmationModal />
      <CategorySearch />
      <ButtonNextPage />
      <ButtonPublishAd />
      <Hero title="" subtitle="" heroPath={homeHero} />
      <CardHolder title="O que estão doando na sua região" />
      <CardHolder title="Quem está precisando de doação na sua região" />
      <Card imagePath={canetas} />
      <Card imagePath={lapis} />
      <Card imagePath={lancheira} />
    </>
  );
};

export default Teste;
