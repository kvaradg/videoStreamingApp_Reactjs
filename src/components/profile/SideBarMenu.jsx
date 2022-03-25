import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineAccountCircle, MdUploadFile } from "react-icons/md";
import Styles from "../../components/profile/myprofile.module.css";
const SideBarMenu = () => {
  return (
    <div className={Styles.SideBarMenu}>
      <ul>
        <li>
          <Link to="/myprofile/my-account">
            <span>
              <MdOutlineAccountCircle />
            </span>
            <span>My Account</span>
          </Link>
        </li>
        <li>
          <Link to="/myprofile/upload-photo">
            <span>
              <MdUploadFile />
            </span>
            <span>Upload Photo</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBarMenu;
