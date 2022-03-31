import React, { useState, useContext } from "react";
import Styles from "../authComponent/auth.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link ,useNavigate} from "react-router-dom";
import { toast } from "react-toastify";

import { auth } from "../../api/firebase";
import { updatePassword } from "firebase/auth";
import { AuthContext } from './../../api/AuthContext';
const UpdatePassword = () => {
    let USER = useContext(AuthContext);
    let navigate = useNavigate();
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState(false);
  //for eye icon
  let [toggle, setToggle] = useState(false);
  //to show password or hide
  let [passwordShow, setPasswordShow] = useState(false);

  let changeEye = () => {
    //for eye icon
    setToggle(!toggle);
    //to show password or hide
    setPasswordShow(!passwordShow);
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setLoading(true);
        console.log(password);
        await updatePassword(USER, password);
        toast.success("Sucessfully password updated");
        navigate("/user");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <section id={Styles.authSection}>
      <article className={Styles.authArticle}>
        <h1 style={{ padding: "20px 0" }}>Update Password</h1>
        <form className={Styles.formBlock} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="" className={Styles.formLabel}>
              New Password :
            </label>
            <input
              //to show or hide password
              type={passwordShow === true ? "text" : "password"}
              className={Styles.formControl}
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
            <span className={Styles.eyeIcon} onClick={changeEye}>
              {toggle !== true ? (
                <FaEyeSlash className={Styles.eyeIconSVG} />
              ) : (
                <FaEye className={Styles.eyeIconSVG} />
              )}
            </span>
          </div>
          <div className="form-group">
            <p className={Styles.gotoAuth}>
              <Link to="/user" className={Styles.gotoAuthLink}>
                go back to my profile
              </Link>
            </p>
          </div>

          <div>
            <button className={Styles.btn}>
              {loading ? "loading..." : "Update Password"}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default UpdatePassword;
