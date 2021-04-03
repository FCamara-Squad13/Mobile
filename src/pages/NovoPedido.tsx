import React from "react";
import BackToHome from "../components/BackToHome";

const NovoPedido: React.FC = () => {
  return (
    <div className="container">
      <div className="details-content">
        <BackToHome />
        <h1>Novo Pedido</h1>
      </div>
    </div>
  );
};

export default NovoPedido;
