import React from "react";
import Styles from "../movies/movie.module.css"
const UploadMovie = () => {
  return (
    <section id={Styles.authSection}>
      <article className={Styles.authArticle}>
        <h1 style={{ padding: "5px 0" , fontSize:"20px"}}>Upload Movie</h1>
        <form className={Styles.formBlock}>
          <div className={Styles.divSection}>
            <div className="form-group">
              <label htmlFor="" className={Styles.formLabel}>
                Movie Title:
              </label>
              <input type="text" className={Styles.formControl} />
            </div>
            <div className="form-group">
              <label htmlFor="" className={Styles.formLabel}>
                Movie genere:
              </label>
              <input type="email" className={Styles.formControl} />
            </div>
            <div className="form-group">
              <label htmlFor="" className={Styles.formLabel}>
                Year Of Release
              </label>
              <input type="password" className={Styles.formControl} />
            </div>
            <div className="form-group">
              <label htmlFor="" className={Styles.formLabel}>
                Desctiption:
              </label>
              {/* <input type="password" className={Styles.formControl} /> */}
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                className={Styles.formControl}
              ></textarea>
            </div>

            <div>
              <label htmlFor="" className={Styles.formLabel}>
                Movie Rating:
              </label>
              <div className={Styles.checked}>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
            </div>
          </div>

          <div className={Styles.divSection}>
            <div className="form-group">
              <label htmlFor="" className={Styles.formLabel}>
                Movie Photo:
              </label>
              <input type="file" className={Styles.formControl} />
            </div>
            <div className="form-group">
              <label htmlFor="" className={Styles.formLabel}>
                Movie Video:
              </label>
              <input type="file" className={Styles.formControl} />
            </div>
            <div className="form-group">
              <label htmlFor="" className={Styles.formLabel}>
                Movie Language:
              </label>
              <input type="text" className={Styles.formControl} />
            </div>
            <div className="form-group">
              <label htmlFor="" className={Styles.formLabel}>
                Movie Cast:
              </label>
              <input type="text" className={Styles.formControl} />
            </div>
            <div>
              <button className={Styles.btn}>Upload Movie</button>
            </div>
          </div>
        </form>
      </article>
    </section>
  );
};

export default UploadMovie;
