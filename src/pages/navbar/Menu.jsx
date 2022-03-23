import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "../../pages/navbar/navbar.module.css";

const Menu = () => {
  return (
    <ul className={Styles.navbarUl}>
      <li>
        <NavLink
          to={{ pathname: "/" }}
          activeClassName="active"
          className={Styles.navbarAnchor}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={{ pathname: "/signin" }}
          activeClassName="active"
          className={Styles.navbarAnchor}
        >
          SignIn
        </NavLink>
      </li>
      <li>
        <NavLink
          to={{ pathname: "/signup" }}
          activeClassName="active"
          className={Styles.navbarAnchor}
        >
          SignUp
        </NavLink>
      </li>
    </ul>
  );
};

export default Menu;
