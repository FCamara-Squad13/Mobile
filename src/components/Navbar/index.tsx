import React from "react";
import "./style.css";

const Navbar: React.FC = () => {
  return (
    <nav className="nav">
      <div>
        <button type="button" className="logo" placeholder="LOGO DO SITE">
          LOGO DO SITE
        </button>
      </div>
      <div className="menu">
        
      </div>
      <div className="user-actions">
        <div className="btnAnnounce" />
        <div className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
