/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import "./style.css";

import imageUploader from "../../assets/images/image-upload.png";
import newDonationPic from "../../assets/images/new-donation-illustration.png";

const FormPublishAd: React.FC = () => {
  return (
    <div className="new-donation-content">
      <div className="form-publish-ad">
        <form className="new-donation">
          <div className="input-div">
            <h2 className="input-label">O que você está doando?</h2>
            <input
              type="text"
              className="input-donating"
              placeholder="Digite aqui o que você esta doando"
            />
            <div className="input-footer">
              <span className="donation-description">
                Exemplo: Lápis de cor 24 cores
              </span>
              <span className="span-number-donating">0/60</span>
            </div>
          </div>

          <div className="input-div">
            <h2 className="input-label">Descrição do anúncio</h2>
            <input
              type="text"
              className="input-donating"
              placeholder="Descreva de forma objetiva o que você está doando"
            />
            <span className="donation-description">
              Exemplo:Estou doando esses lápis de cor da marca Faber Castell,
              eles estão todos apontados e foram usados poucas vezes.
            </span>
            <span className="span-number-donating">0/200</span>
          </div>

          <div className="input-div">
            <h2 className="input-label">Qual a categoria da sua doação?</h2>
            <select className="input-donating input-select">
              <option>Selecione uma categoria</option>
              <option value="Apostilas e livros">Apostilas e livros</option>
              <option value="Bolsas, estojos e mochilas">
                Bolsas, estojos e mochilas
              </option>
              <option value="Cadernos e papelaria em geral">
                Cadernos e papelaria em geral
              </option>
              <option value="Canetas, lápis e borracha">
                Canetas, lápis e borracha
              </option>
              <option value="Celulares, tablets e computadores">
                Celulares, tablets e computadores
              </option>
              <option value="Compassos, réguas e tesouras">
                Compassos, réguas e tesouras
              </option>
              <option value="Pincéis, tintas e colas">
                Pincéis, tintas e colas
              </option>
            </select>
            <span className="donation-description">
              Selecione a melhor categoria para identificar o que você está
              doando.
            </span>
          </div>

          <div className="input-div">
            <h2 className="input-label">Palavras-chave</h2>
            <input
              type="text"
              className="input-donating"
              placeholder="Separe cada palavra-chave por vírgula"
            />
            <span className="donation-description">
              Exemplo:lápis,lápis de cor, faber castell
            </span>
          </div>
          <div className="input-div use-conditions">
            <div className="radio">
              <label className="input-radio-label">
                <input className="input-radio" type="radio" value="novo" />
                Novo
              </label>
              <label className="input-radio-label">
                <input className="input-radio" type="radio" value="usado" />
                Usado
              </label>
            </div>
            <span className="donation-description">
              Se o que você está doando já foi usado de alguma forma, marque
              como usado
            </span>
          </div>
          <div className="input-div delivery-conditions">
            <div className="radio">
              <label className="input-radio-label">
                <input
                  className="input-radio"
                  type="radio"
                  value="a combinar"
                />
                Entrega a combinar
              </label>
              <label className="input-radio-label">
                <input className="input-radio" type="radio" value="no local" />
                Entrego no local
              </label>
              <label className="input-radio-label">
                <input className="input-radio" type="radio" value="Envio" />
                Envio
              </label>
            </div>
            <span className="donation-description">
              Selecione a opção que faz mais sentido para sua realidade,assim
              outras pessoas vão saber como você fará a entrega do que está
              doando.Lembre-se: tudo pode ser negociado :)
            </span>
          </div>
          <div className="input-div donation-location">
            <h2 className="input-label">Sua localização</h2>
            <div className="location-wrapper">
              <div className="uf-wrapper">
                <span className="state">Estado</span>
                <select className="input-state-donating">
                  <option>Selecione o UF</option>
                </select>
              </div>
              <div className="city-wrapper">
                <span className="city">Cidade</span>
                <input
                  type="text"
                  className="input-city-donating"
                  placeholder="Digite aqui sua cidade"
                />
              </div>
            </div>
            <span className="donation-description">
              Só precisamos saber sua cidade e Estado para facilitar o contato e
              a entrega da doação.Seu endereço não será solicitado e quem decide
              como vai fazer a doação é você
            </span>
          </div>
          <button className="submit-form-button" type="submit">
            Publicar anúncio
          </button>
        </form>
        <div className="new-donation-images-wrapper">
          <img
            src={imageUploader}
            alt="imagem de funcionalidade de upload de imagem, ainda não implementada"
          />
          <img
            src={newDonationPic}
            alt="homem separando itens para colocar em caixa de papelão com etiqueta escrita 'Doação'"
          />
        </div>
      </div>
    </div>
  );
};

export default FormPublishAd;
