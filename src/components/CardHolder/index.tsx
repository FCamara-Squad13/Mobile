import React from "react";
import "./style.css";

import HomeCard from "../HomeCard";

import canetas from "../../assets/images/Canetas.png";
import mochila from "../../assets/images/Mochila.jpg";
import lancheira from "../../assets/images/Lancheira.jpg";

type Props = {
  title: string;
};

const CardHolder: React.FC<Props> = ({ title }) => {
  const data = [
    {
      id: 1,
      titulo: "Lápis de cor 12 cores",
      localidade: "Curitiba | PR",
      descricao:
        "Estou doando esses lápis de cor da marca Faber Castell, eles estão todos apontados e foram usados poucas vezes",
      data: "28/03/2021",
      categoria: "Canetas, lápis e borrachas",
      entrega: ["Envio"],
      status: "usado",
    },
    {
      id: 2,
      titulo: "Mochila Grande",
      localidade: "Curitiba | PR",
      descricao:
        "Tenho essa mochila guardada e não tenho mais espaço, não estou usando e se alguém precisar fico feliz em doar!",
      data: "27/03/2021",
      categoria: "Bolsas,estojos e mochilas",
      entrega: ["Entrega a combinar"],
      status: "usado",
    },
    {
      id: 3,
      titulo: "Lancheira Infantil",
      localidade: "Curitiba | PR",
      descricao:
        "Ganhamos essa lancheira no natal do ano passado mas minha filha nunca usou, está com etiqueta e cabe bastante coisa.",
      data: "25/03/2021",
      categoria: "Bolsas,estojos e mochilas",
      entrega: ["Entrega no local"],
      status: "novo",
    },
  ];

  const imageArray = [canetas, mochila, lancheira];

  return (
    <section className="section">
      <div className="container">
        <div className="section-content">
          <h3 className="section-title">{title}</h3>
          <div className="card-holder">
            {data.map((item) => {
              return (
                <HomeCard
                  imagePath={imageArray[item.id - 1]}
                  title={item.titulo}
                  location={item.localidade}
                  description={item.descricao}
                  date={item.data}
                  category={item.categoria}
                  delivery={item.entrega}
                  status={item.status}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardHolder;
