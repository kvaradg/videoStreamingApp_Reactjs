import React, { useContext } from "react";
import { AuthContext } from "./../../api/AuthContext";
import Styles from "../../components/profile/myprofile.module.css";
import { AiFillCamera } from "react-icons/ai";
const MyAccount = () => {
  let USER = useContext(AuthContext);
  let { displayName, email, emailVerified, photoURL } = USER;
  return (
    <section>
      <article>
        <div className="photoURL">
          <figure className={Styles.photoURL}>
            <aside className={Styles.asideIcon}>
              <img
                // style={{ height: "100px" }}
                src={photoURL}
                alt={displayName}
              />

              <main>
                <span>
                  <AiFillCamera />
                </span>
              </main>
            </aside>
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
