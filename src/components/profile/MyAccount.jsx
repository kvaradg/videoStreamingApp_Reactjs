import React, { useContext } from "react";
import { AuthContext } from "./../../api/AuthContext";
import Styles from "../../components/profile/myprofile.module.css";
const MyAccount = () => {
  let USER = useContext(AuthContext);
  let { displayName, email, emailVerified, photoURL } = USER;
  return (
    <section>
      <article>
        <div className="photoURL">
          <figure className={Styles.photoURL}>
            <img
              // style={{ height: "100px" }}
              src={photoURL}
              alt={displayName}
            />
            <figcaption>
              <p>{displayName}</p>
            </figcaption>
          </figure>
        </div>
        <div className={Styles.userInfo}>
          <p>{email}</p>
        </div>
      </article>
    </section>
  );
};

export default MyAccount;
