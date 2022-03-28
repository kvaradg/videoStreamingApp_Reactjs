import React, { useState } from "react";
import { toast } from "react-toastify";
import Styles from "../../components/authComponent/auth.module.css";
//fire base
import { auth } from "../../api/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
//for show and hide password
import { FaEye, FaEyeSlash } from "react-icons/fa";
//to navigate to home after sign IN
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignIn = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState(false);
  //for eye icon
  let [toggle, setToggle] = useState(false);
  //to show password or hide
  let [passwordShow, setPasswordShow] = useState(false);
  //to navigate
  let navigate = useNavigate();
  //for toggling eye icon
  let changeEye = () => {
    //for eye icon
    setToggle(!toggle);
    //to show password or hide
    setPasswordShow(!passwordShow);
  };

  //to fetch data on submitting
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      // console.log({email,password});
      let userData = await signInWithEmailAndPassword(auth, email, password);
      //for verification
      if (userData.user.emailVerified === true) {
        toast.success("Sucessfully user logged in");
        navigate("/");
      } else {
        navigate("/signin");
        toast.error("User not verified");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message.slice(9));
    }
    setLoading(false);
    setEmail("");
    setPassword("");
  };

  return (
    <section id={Styles.authSection}>
      <article className={Styles.authArticle}>
        <h1 style={{ padding: "20px 0" }}>Sign In</h1>
        <form className={Styles.formBlock} onSubmit={handleSubmit}>
          <Link to="/phone-auth">Sign Up with phone number</Link>
          <div className="form-group">
            <label htmlFor="" className={Styles.formLabel}>
              Email :
            </label>
            <input
              type="email"
              className={Styles.formControl}
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className={Styles.formLabel}>
              Password :
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
              New to StreamBase
              <Link to="/signup" className={Styles.gotoAuthLink}>
                Signup
              </Link>
            </p>
            {/* //clear property clears float property */}
            <p
              style={{
                clear: "both",
                padding: "3px 0",
              }}
            >
              <Link to="/password-reset" className={Styles.gotoAuthLink}>
                Forgot Password
              </Link>
            </p>
          </div>

          <div>
            <button className={Styles.btn}>
              {loading ? "loading..." : "Sign In"}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default SignIn;
