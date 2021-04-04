import React from "react";
import "./style.css";

const FormPublishAd: React.FC = () => {
  return (
    <div className="form-publish-ad">
      <div className="what-are-you-donating">
        <h2 className="title-donating">O que você está doando?</h2>
        <input
          type="text"
          className="input-donating"
          placeholder="Digite aqui o que você esta doando"
        />
        <span className="span-description-donating">
          Exemplo:Lápis de cor 24 cores
        </span>
        <span className="span-number-donating">0/60</span>
      </div>
      <div className="description-donating">
        <h2 className="title-description-donating">O que você está doando?</h2>
        <input
          type="text"
          className="input-description-donating"
          placeholder="Descreva de forma objetiva o que você está doando"
        />
        <span className="span-description-donating">
          Exemplo:Estou doando esses lápis de cor da marca Faber Castell, eles
          estão todos apontados e foram usados poucas vezes.
        </span>
        <span className="span-number-donating">0/200</span>
      </div>
      <div className="category-donating">
        <h2 className="title-category-donating">
          Qual a categoria da sua doação?
        </h2>
        <input
          type="select"
          className="input-category-donating"
          placeholder="Selecione uma categoria"
        />
        <span className="span-category-donating">
          Selecione a melhor categoria para identificar o que você está doando.
        </span>
        <span className="span-number-donating">0/200</span>
      </div>
      <div className="key-words-donating">
        <h2 className="title-key-word-donating">Palavras-chave</h2>
        <input
          type="text"
          className="input-key-word-donating"
          placeholder="Separe cada palavra-chave por vírgula"
        />
        <span className="span-category-donating">
          Exemplo:lápis,lápis de cor, faber castell
        </span>
      </div>
      <div className="conditions-donating">
        <h2 className="title-conditions-donating">Condiçoẽs de uso</h2>
        <button type="button" className="new">
          Novo
        </button>
        <button type="button" className="new">
          Usado
        </button>
        <span className="span-conditions-donating">
          Se o que você está doando já foi usado de alguma forma, marque como
          usado
        </span>
      </div>
      <div className="conditions-donating">
        <h2 className="title-conditions-donating">Condiçoẽs de uso</h2>
        <button type="button" className="new">
          Novo
        </button>
        <button type="button" className="new">
          Usado
        </button>
        <span className="span-conditions-donating">
          Se o que você está doando já foi usado de alguma forma, marque como
          usado
        </span>
      </div>
    </div>
  );
};

export default FormPublishAd;
