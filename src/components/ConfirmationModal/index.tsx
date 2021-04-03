import React from "react";

import illustration from "../../assets/images/confirmacao-de-publicacao.svg";

const ConfirmationModal: React.FC = () => {
  return (
    <div className="modal confirmation-modal">
      <h3 className="modal-title">
        Você tem certeza de que está tudo certo com as informações preenchidas
        no seu anúncio?
      </h3>
      <p className="modal-text">Conferiu tudo direitinho?</p>
      <div className="buttons-wrapper">
        <button type="button" className="confirm-button modal-button">
          Sim, quero publicar
        </button>
        <button type="button" className="modal-button">
          Não, preciso revisar
        </button>
      </div>
      <img
        className="modal-image"
        src={illustration}
        alt="man with glasses looking forward"
      />
    </div>
  );
};

export default ConfirmationModal;
