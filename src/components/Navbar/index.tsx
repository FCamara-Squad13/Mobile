import React from "react";
import "./style.css";
import { Bell } from "react-feather";
import { Link, NavLink } from "react-router-dom";
import profile from "../../assets/avatar.png";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/">
            <button type="button" className="logo" placeholder="LOGO DO SITE">
              LOGO DO SITE
            </button>
          </Link>
          <ul className="menu">
            <NavLink to="/" exact activeClassName="active">
              <li className="navbar-link">Home</li>
            </NavLink>
            <NavLink to="/doando" exact activeClassName="active">
              <li className="navbar-link">Estão doando</li>
            </NavLink>
            <NavLink to="/precisando">
              <li className="navbar-link">Estão precisando</li>
            </NavLink>
          </ul>
          <div className="user-actions">
            <Link to="/anunciar">
              <button type="button" className="btnAnnounce">
                Anunciar
              </button>
            </Link>
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
