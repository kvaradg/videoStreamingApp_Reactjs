import React from "react";
import Styles from "../../components/profile/myprofile.module.css";
import MainProfile from "./MainProfile";
import SideBarMenu from "./SideBarMenu";
const MyProfile = () => {
  return (
    <section>
      <article className={Styles.profileBlock}>
              <div className={Styles.sidebarMenu}>
          <SideBarMenu />
        </div>
              <div className={Styles.mainProfile }>
          <MainProfile />
        </div>
      </article>
    </section>
  );
};

export default MyProfile;
