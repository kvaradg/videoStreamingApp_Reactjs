import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdOutlineAccountCircle, MdUploadFile } from "react-icons/md";
import { TiUserDelete } from "react-icons/ti";
import Styles from "../../components/profile/myprofile.module.css";

import { deleteUser } from "firebase/auth";
import { AuthContext } from "./../../api/AuthContext";
const SideBarMenu = () => {
  let USER = useContext(AuthContext);
  let removeAccount = async () => {
    // console.log("remove");
    let deletedUser = await deleteUser(USER);
    if (window.confirm("Are you sure?")) {
      window.sessionStorage.removeItem("TOKEN");
      window.location.assign("/signup");
      return deletedUser;
    }
  };
  return (
    <div className={Styles.SideBarMenu}>
      <ul>
        <li>
          <Link to="/" style={{ background: "red", fontWeight: "bold" }}>
            <span>Account Setting</span>
          </Link>
        </li>
        <li>
          <Link to="/user/my-account">
            <span>
              <MdOutlineAccountCircle />
            </span>
            <span>My Account</span>
          </Link>
        </li>
        <li>
          <Link to="/user/upload-photo">
            <span>
              <MdUploadFile />
            </span>
            <span>Upload Photo</span>
          </Link>
        </li>
        <li>
          <Link to="/user/update-password">
            <span>
              <MdUploadFile />
            </span>
            <span>Update Password</span>
          </Link>
        </li>

        <li className="lastChild_removeAccount" onClick={removeAccount}>
          <a href="/">
            <span>
              <TiUserDelete />
            </span>
            <span>Remove Account</span>
          </a>
        </li>

        <li>
          <Link to="/" style={{ background: "red", fontWeight: "bold" }}>
            <span>Movies</span>
          </Link>
        </li>

        <li>
          <Link to="/user/movie/upload-movie">
            <span>
              <MdUploadFile />
            </span>
            <span>Upload Movie</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBarMenu;
