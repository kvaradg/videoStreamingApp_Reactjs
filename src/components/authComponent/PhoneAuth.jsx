import React, { useState } from "react";
import { toast } from "react-toastify";
import Styles from "../../components/authComponent/auth.module.css";
//fire base
import { auth } from "../../api/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const PhoneAuth = () => {
  let [phone, setPhone] = useState("");
  let [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      let recaptchaVerifier = new RecaptchaVerifier(
        "captcha-container",
        {
          size: "invisible",
          callback: response => {},
        },
        auth
      );
      // send OTP
      let sendOTP = await signInWithPhoneNumber(auth, phone, recaptchaVerifier);

      let confirmationMessage = window.prompt("please enter OTP");
      await sendOTP.confirm(confirmationMessage);
      toast.success("Sucessfully signed in");
      navigate("/");
      navigate("/signin");
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  return (
    <section id={Styles.authSection}>
      <article className={Styles.authArticle}>
        <h1 style={{ padding: "20px 0" }}>SignIn with phone number</h1>
        <form className={Styles.formBlock} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="" className={Styles.formLabel}>
              Phone Number:
            </label>
            <input
              type="text"
              className={Styles.formControl}
              value={phone}
              onChange={e => {
                setPhone(e.target.value);
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
          </div>

          {/* //CAPTCHA CONTAINER */}
          <div id="captcha-container"></div>

          <div className="form-group">
            <button className={Styles.btn}>
              {loading ? "loading..." : "send"}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default PhoneAuth;
