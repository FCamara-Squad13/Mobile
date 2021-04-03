import React, { useLayoutEffect } from "react";
import CardHolder from "../../components/CardHolder";
import Hero from "../../components/Hero";

import heroPrecisando from "../../assets/images/img-hero-precisando.png";

const Precisando: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const subtitle = `Que tal ajudar alguém doando aquele material escolar que está parado aí, na sua casa?
Ou então, doar aquele material novinho, que você nunca usou e não vai fazer falta. Vamos espalhar sorrisos por aí?`;

  return (
    <>
      <Hero
        title="Tem alguém precisando?"
        subtitle={subtitle}
        heroPath={heroPrecisando}
      />
      <CardHolder title="" />
    </>
  );
};

export default Precisando;
