import React from "react";
import { useHistory } from "react-router-dom";

import "./style.css";

const GoBack: React.FC = () => {
  const history = useHistory();

  return (
    <button
      type="button"
      className="go-back-button"
      onClick={() => {
        history.goBack();
      }}
    >
      Voltar ao anúncio
    </button>
  );
};

export default GoBack;
