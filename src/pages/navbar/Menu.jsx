import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Styles from "../../pages/navbar/navbar.module.css";
//use context
import { AuthContext } from "../../api/AuthContext";
const Menu = () => {
  let USER = useContext(AuthContext);
  console.log(USER);

  let AuthenticatedUser = () => {
    return (
      <>
        <li>
          <NavLink to={{ pathname: "/" }} className={Styles.navbarIconLink}>
            <span style={{ left: "0px", position: "relative" }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                alt=""
                className={Styles.navbarIcon}
              />
            </span>
            <span>{USER.displayName}</span>
          </NavLink>
          
        </li>
        <li>
          <NavLink to={{ pathname: "/" }} className={Styles.navbarAnchor}>
            Signout
          </NavLink>
        </li>
      </>
    );
  };

  let GuestUser = () => {
    return (
      <>
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
      </>
    );
  };
  
  return (
    <ul className={Styles.navbarUl}>
      <li>
        <NavLink
          to={{ pathname: "/" }}
          activeclassName="active"
          className={Styles.navbarAnchor}
        >
          Home
        </NavLink>
      </li>
      {USER ? <AuthenticatedUser /> : <GuestUser />}
    </ul>
  );
};

export default Menu;
