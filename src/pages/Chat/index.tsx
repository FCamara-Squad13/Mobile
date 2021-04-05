import React from "react";
import GoBack from "../../components/GoBack";

import "./style.css";

import alert from "../../assets/images/alert.png";

const Home: React.FC = () => {
  return (
    <div className="container">
      <GoBack />
      <h1>hi</h1>
      <div className="chat-page-content">
        <div className="chat-area">
          <p className="disclaimer">
            Nossa plataforma não solicita nenhum tipo de código ou dado
            sensível, não forneça informações pessoais como dados de conta
            bancária e cartão de crédito para estranhos.
          </p>
          <p className="disclaimer">Percebeu alguma atividade suspeita?</p>
          <div className="complaint-wrapper">
            <img src={alert} alt="triângulo com sinal de exclamação dentro" />
            <p className="complaint">Fazer uma denúncia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
