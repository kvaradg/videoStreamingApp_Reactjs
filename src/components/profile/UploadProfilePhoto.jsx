import React, { useState, useContext } from "react";
import Styles from "../../components/authComponent/auth.module.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
//for photo storge
import { storage } from "../../api/firebase";
import {
  ref as photoRef,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "./../../api/AuthContext";
import MainProfile from "./MainProfile";



const UploadProfilePhoto = () => {
  let [loading, setLoading] = useState(false);
  let [photo, setPhoto] = useState("");
  //for progress bar
  let [progress, setProgress] = useState(0);
  let [barStatus, setBarStatus] = useState(false);

  let USER = useContext(AuthContext);

  let handelSubmit = async e => {
    e.preventDefault();

    try {
      setLoading(true);
      //photo storage
      let storageRef = photoRef(storage, `/profile-photo/${photo.name}`);
      let uploadTask = uploadBytesResumable(storageRef, photo);

      //firebase event
      uploadTask.on(
        "state_changed",

        snapShot => {
          //Progresssing upload photot snaps
          let progressBar =
            (snapShot.bytesTransferred / snapShot.totalBytes) * 100;
          setProgress(progressBar);
          setBarStatus(true);
          setLoading(true);
        },

        err => {
          //error handeling
        },

        async () => {
          //completion of task
          let downloadUrl = await getDownloadURL(storageRef);
          updateProfile(USER, {
            photoURL: downloadUrl,
          });
          //once downloaded
          setBarStatus(false);
          setLoading(false);

          toast.success("Successfully photo uploaded");
          window.location.assign("/");
        }
      );
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  let ProgressUI = () => {
    return (
      <div class="progress">
        <div class="bar" style={{ width: `${progress}%` }}>
          <p class="percent">{Math.round(progress)}</p>
        </div>
      </div>
    );
  };
  return (
    <section id={Styles.authSection}>
      <header>
        <span>{barStatus === true ? <ProgressUI /> : ""}</span>
      </header>
      <article className={Styles.authArticle}>
        <h1 style={{ padding: "20px 0", fontSize: "28px" }}>Upload Photo</h1>
        <form className={Styles.formBlock} onSubmit={handelSubmit}>
          <div className="form-group">
            <label htmlFor="" className={Styles.formLabel}>
              Upload Photo
            </label>
            <input
              type="file"
              className={Styles.formControl}
              onChange={e => setPhoto(e.target.files[0])}
            />
          </div>

          <div className="form-group">
            <p className={Styles.gotoAuth}>
              Go back to Home Page
              <Link to="/myprofile" className={Styles.gotoAuthLink}>
                goback
              </Link>
            </p>
          </div>

          <div>
            <button className={Styles.btn}>
              {loading ? "loading..." : "Upload"}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default UploadProfilePhoto;
