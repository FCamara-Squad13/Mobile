import React from "react";
import "./style.css";

import illustration from "../../assets/images/proibido-avancar.svg";

const ErrorModal: React.FC = () => {
  return (
    <div className="modal error-modal">
      <h3 className="modal-title">
        Ei, você precisa preencher todos os campos antes de publicar um anúncio!
      </h3>
      <p className="modal-text">Vamos voltar e fazer com calma?</p>
      <button type="button" className="modal-button">
        Combinado
      </button>
      <img
        className="modal-image"
        src={illustration}
        alt="man with glasses looking forward"
      />
    </div>
  );
};

export default ErrorModal;
