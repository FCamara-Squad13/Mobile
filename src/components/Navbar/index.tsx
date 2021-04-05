import React from "react";
import "./style.css";
import { Bell } from "react-feather";
import { Link, NavLink, useLocation } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import profile from "../../assets/avatar.png";

const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/">
            <img className="logo" src={logo} alt="logo do site" />
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
            <NavLink
              to="/anunciar"
              isActive={() =>
                ["/anunciar", "/nova-doacao", "/novo-pedido"].includes(pathname)
              }
              activeClassName="invisible"
            >
              <button type="button" className="btnAnnounce">
                Anunciar
              </button>
            </NavLink>
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
