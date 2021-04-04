import React from "react";
import "./style.css";

const FormPublishAd: React.FC = () => {
  return (
    <div className="form-publish-ad">
      <form>
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
          <h2 className="title-donating">Descrição do anúncio</h2>
          <input
            type="text"
            className="input-donating"
            placeholder="Descreva de forma objetiva o que você está doando"
          />
          <span className="span-description-donating">
            Exemplo:Estou doando esses lápis de cor da marca Faber Castell, eles
            estão todos apontados e foram usados poucas vezes.
          </span>
          <span className="span-number-donating">0/200</span>
        </div>

        <div className="category-donating">
          <h2 className="title-donating">Qual a categoria da sua doação?</h2>
          <select className="input-donating">
            <option>Selecione uma categoria</option>
            <option value="Lapis">Lápis</option>
            <option value="Cadernos">Cadernos</option>
          </select>
          <span className="span-description-donating">
            Selecione a melhor categoria para identificar o que você está
            doando.
          </span>
        </div>

        <div className="key-words-donating">
          <h2 className="title-donating">Palavras-chave</h2>
          <input
            type="text"
            className="input-donating"
            placeholder="Separe cada palavra-chave por vírgula"
          />
          <span className="span-description-donating">
            Exemplo:lápis,lápis de cor, faber castell
          </span>
        </div>

        <div className="conditions-donating">
          <h2 className="title-donating">Condiçoẽs de uso</h2>
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

        <div className="delivery-conditions-donating">
          <h2 className="title-donating">Condiçoẽs de uso</h2>
          <button type="button" className="delivery-to-match">
            Entrega a combinar
          </button>
          <button type="button" className="delivery-to-place">
            Entrego no local
          </button>
          <button type="button" className="send">
            Envio
          </button>
          <span className="span-delivery-donating">
            Selecione a opção que faz mais sentido para sua realidade,assim
            outras pessoas vão saber como você fará a entrega do que está
            doando.Lembre-se: tudo pode ser negociado :)
          </span>
        </div>

        <div className="your-location">
          <h2 className="title-donating">Sua localização</h2>
          <span className="state">Estado</span>
          <select className="input-state-donating">
            <option>Selecione o UF</option>
          </select>
          <span className="city">Cidade</span>
          <input
            type="text"
            className="input-city-donating"
            placeholder="Digite aqui sua cidade"
          />
          <span className="span-location-donating">
            Só precisamos saber sua cidade e Estado para facilitar o contato e a
            entrega da doação.Seu endereço não será solicitado e quem decide
            como vai fazer a doação é você
          </span>
        </div>
      </form>
    </div>
  );
};

export default FormPublishAd;
