import React, { useState } from "react";
import { toast } from "react-toastify";
import Styles from "../../components/authComponent/auth.module.css";
//fire base
import { auth } from "../../api/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
//for show and hide password
//to navigate to home after sign IN
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  let [email, setEmail] = useState("");
  let [loading, setLoading] = useState(false);

  //to navigate
  let navigate = useNavigate();
  //for toggling eye icon

  //to fetch data on submitting
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      await sendPasswordResetEmail(auth, email);
      toast.info(`Password reset has been sent to ${email} `);
      navigate("/signin");
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  return (
    <section id={Styles.authSection}>
      <article className={Styles.authArticle}>
        <h1 style={{ padding: "20px 0" }}>Forgot Password</h1>
        <form className={Styles.formBlock} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="" className={Styles.formLabel}>
              Email:
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
            <p className={Styles.gotoAuth}>
              New to StreamBase
              <Link to="/signup" className={Styles.gotoAuthLink}>
                Signin
              </Link>
            </p>
            {/* //clear property clears float property */}
          </div>

          <div className="form-group">
            <button className={Styles.btn}>
              {loading ? "loading..." : "password reset"}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default PasswordReset;
