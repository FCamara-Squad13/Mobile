import React from "react";
import "./style.css";
import { Bell } from "react-feather";
import profile from "../../assets/avatar.png";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <button type="button" className="logo" placeholder="LOGO DO SITE">
            LOGO DO SITE
          </button>
          <div className="menu">
            <button type="button" className="navbar-button active">
              Home
            </button>
            <button type="button" className="navbar-button">
              Estão doando
            </button>
            <button type="button" className="navbar-button">
              Estão precisando
            </button>
          </div>
          <div className="user-actions">
            <button type="button" className="btnAnnounce">
              Anunciar
            </button>
            <div className="icons">
              <Bell color="#66331E" className="icon-notification" />
              <div className="icon-profile">
                <img
                  src={profile}
                  alt="profile"
                  className="profile"
                  width="24px"
                  height="33px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
