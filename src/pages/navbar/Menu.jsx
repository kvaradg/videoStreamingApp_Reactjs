import React, { useContext, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import Styles from "../../pages/navbar/navbar.module.css";
//use context
import { AuthContext } from "../../api/AuthContext";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { auth } from "../../api/firebase";
const Menu = () => {
  let USER = useContext(AuthContext);
  // console.log(USER);

  // FOR DROP DOWN MENU
  let [toggle, setToggle] = useState(false);
  let toggleRef = useRef();

  let dropDownMenu = e => {
    e.preventDefault();
    setToggle(!toggle);
  };

  //SIGN OUT FUNCTIONALITY
  let signout = async () => {
    await signOut(auth);
    toast.success("Sucessfully Signed Out");
    window.location.assign("/signin");
  };

  let AuthenticatedUser = () => {
    return (
      <>
        <li onClick={dropDownMenu}>
          <NavLink to={{ pathname: "/" }} className={Styles.navbarIconLink}>
            <span style={{ left: "0px", position: "relative" }}>
              <img src={USER.photoURL} alt="" className={Styles.navbarIcon} />
            </span>
            <span>Profile</span>
          </NavLink>
          <div
            className={toggle === true ? "dropDown show" : "dropDown hide"}
            ref={toggleRef}
            // style={toggle ? { display: "block"} : { display: "none" }}
          >
            <ul>
              <li>
                <NavLink to="/myprofile">
                  <FaUser />
                  My Profile
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#" onClick={signout} className={Styles.navbarAnchor}>
            Signout
          </a>
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
    <div className={Styles.menu}>
      <ul>
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
    </div>
  );
};

export default Menu;
