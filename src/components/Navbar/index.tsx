import React from "react";
import "./style.css";
import { Bell } from "react-feather";
import profile from "../../assets/avatar.png";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div>
            <button type="button" className="logo" placeholder="LOGO DO SITE">
              LOGO DO SITE
            </button>
          </div>
          <div className="menu">
            <button type="button" className="home">
              Home
            </button>
            <button type="button" className="donating">
              Estão doando
            </button>
            <button type="button" className="needing">
              Estão precisando
            </button>
          </div>
          <div className="user-actions">
            <div className="announce">
              <button type="button" className="btnAnnounce">
                Anunciar
              </button>
            </div>
            <div className="iconNotification">
              <Bell />
            </div>
            <div className="iconProfile">
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
    </nav>
  );
};

export default Navbar;
