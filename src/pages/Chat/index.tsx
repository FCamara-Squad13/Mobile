import React from "react";
import GoBack from "../../components/GoBack";

import "./style.css";

import ceciliaPic from "../../assets/images/Cecilia-profile-pic.svg";
import alert from "../../assets/images/alert.png";

const Home: React.FC = () => {
  return (
    <div className="container">
      <GoBack />
      <div className="chat-page-content">
        <div className="chat-area">
          <div className="chat-window">
            <div className="chat-header">
              <img
                src={ceciliaPic}
                alt="foto de perfil"
                className="chat-picture"
              />
              <div className="chat-data">
                <p className="chat-person-data">
                  Cecilia Lannister inicou uma conversa com você em 30/03/2021
                </p>
                <p className="chat-product-data">
                  Referente ao anúncio: Lápis de cor 24 cores
                </p>
              </div>
            </div>
            <div className="chat">
              <div className="chat-container">
                <div className="donee-container">
                  <p className="chat-message donee-message">
                    Mesmo com a escola tendo aulas em casa as crianças estão
                    precisando dos lápis de cor, dividia uma caixinha entre eles
                    mas só sobrou um lápis kkkk se eu pudesse comprar mas vi seu
                    anúncio e acredito que pode nos ajudar nesse momento
                  </p>
                  <p className="chat-message donee-message">
                    Será que não conseguimos nos encontrar em algum lugar
                    público pra tu me entregar? eu realmente não consigo pagar
                    pelo motoboy ou uber pq as coisas estão apertadas aqui em
                    casa desde que fui afastada do trabalho... está difícil, viu
                    menina
                  </p>
                  <span className="time-last-message">20:15</span>
                </div>
                <div className="donator-container">
                  <p className="chat-message donator-message">
                    Oi Cecilia, conversei com meu marido e decidimos que fica
                    mais fácil levar pra ti mesmo! Assim você não precisa se
                    preocupar com nenhum custo :)
                  </p>
                  <p className="chat-message donator-message">
                    Então fica combinado assim: nos encontramos na entrada do
                    Shopping Curitiba, ali na frente da praça, pode ser? Me diz
                    o dia que fica mais fácil pra ti!
                  </p>
                  <span className="time-last-message">20:53</span>
                </div>
              </div>
            </div>
            <div className="chat-footer">
              <div className="chat-container">
                <div className="user-actions-wrapper">
                  <input
                    className="chat-user-input"
                    type="text"
                    placeholder="Digite sua mensagem aqui..."
                  />
                  <button className="send-message-button" type="submit">
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
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
