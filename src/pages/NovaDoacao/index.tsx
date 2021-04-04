import React from "react";
import BackToHome from "../../components/BackToHome";
import FormPublishAd from "../../components/FormPublishAd";
import Hero from "../../components/Hero";

import "./style.css";

const NovaDoacao: React.FC = () => {
  const heroTitle = "Aqui você cria seu anúncio, então vamos começar!";

  return (
    <>
      <Hero title={heroTitle} subtitle="" heroPath="" />
      <div className="container">
        <div className="content">
          <BackToHome />
          <h1 className="new-donation-title">Estou doando</h1>
          <p className="all-fields-must-be-filled">
            *Todos os campos desta página devem ser preenchidos
          </p>
          <FormPublishAd />
        </div>
      </div>
    </>
  );
};

export default NovaDoacao;
