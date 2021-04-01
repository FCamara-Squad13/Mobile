import React from "react";
import "./style.css";

import CardHolder from "../../components/CardHolder";
import ButtonVerMais from "../../components/ButtonVerMais";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Teste: React.FC = () => {
  return (
    <>
      <Navbar />
      <CardHolder />
      <ButtonVerMais />
      <Footer />
    </>
  );
};

export default Teste;
