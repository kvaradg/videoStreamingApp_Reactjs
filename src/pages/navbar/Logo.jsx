import React from "react";
import { MdSlowMotionVideo } from "react-icons/md";
import Styles from "../navbar/navbar.module.css";
const Logo = () => {
  return (
    <div className="logoBlock">
      <a href="#" className={Styles.logoBlockAnchor}>
              <span className={ Styles.logoBlockSpanIcon}>
          <MdSlowMotionVideo />
        </span>
        <span>Stream Base</span>
      </a>
    </div>
  );
};

export default Logo;
