import React from "react";
import "./style.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h3 className="footer__title1">Squad 13-FCamera</h3>
          <h3 className="footer__title2">
            Todos os direitos reservados, 2021.
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
