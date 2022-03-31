import React, { useContext } from "react";
import { AuthContext } from "./../../api/AuthContext";
import Styles from "../../components/profile/myprofile.module.css";
import { AiFillCamera } from "react-icons/ai";
import Spinner from "../../pages/spinner/Spinner";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
const MyAccount = () => {
  let USER = useContext(AuthContext);

  let ProfileUI = () => {
    console.log(USER);
    let { displayName, email, emailVerified, photoURL } = USER;
    return (
      <>
        <div className="photoURL">
          <figure className={Styles.photoURL}>
            <aside className={Styles.asideIcon}>
              <img src={photoURL} alt={displayName} />

              <Link to="/user/upload-photo">
                <main>
                  <span>
                    <AiFillCamera />
                  </span>
                </main>
              </Link>
            </aside>
            <figcaption>
              <p>{displayName}</p>
            </figcaption>
          </figure>
        </div>
        <div className={Styles.userInfo}>
          <p>{email}</p>
        </div>
      </>
    );
  };
  return (
    <section>
      <article>{USER === null ? <Spinner /> : <ProfileUI />}</article>
    </section>
  );
};

export default MyAccount;
