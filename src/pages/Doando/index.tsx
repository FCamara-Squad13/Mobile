import React from "react";
import Hero from "../../components/Hero";
import CardHolder from "../../components/CardHolder";

import heroDoando from "../../assets/images/img-hero-doando.png";

const Doando: React.FC = () => {
  const subtitle = `Aqui vocẽ pode encontrar tudo que precisa de materiais escolares, sejam eles novos ou usados. Se não encontrar algo, procure através dos filtros, eles estão aqui para te ajudar!\n Vai que tem alguém doando, aí pertindo de você?`;

  return (
    <>
      <Hero
        title="Tem alguém doando?"
        subtitle={subtitle}
        heroPath={heroDoando}
      />
      <CardHolder title="" />
    </>
  );
};

export default Doando;
