import React from "react";
import CardHolder from "../../components/CardHolder";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";

const Doando: React.FC = () => {
  const subtitle = `Aqui vocẽ pode encontrar tudo que precisa de materiais escolares, sejam eles novos ou usados. Se não encontrar algo, procure através dos filtros, eles estão aqui para te ajudar!\n Vai que tem alguém doando, aí pertindo de você?`;

  return (
    <>
      <Navbar />
      <Hero title="Tem alguém doando?" subtitle={subtitle} />
      <CardHolder title="" />
      <Footer />
    </>
  );
};

export default Doando;
