import React from "react";
import "./style.css";

import CardHolder from "../../components/CardHolder";
import ButtonVerMais from "../../components/ButtonVerMais";
import Navbar from "../../components/Navbar";

const Teste: React.FC = () => {
  return (
    <>
      <Navbar />
      <CardHolder />
      <ButtonVerMais />
    </>
  );
};

export default Teste;
