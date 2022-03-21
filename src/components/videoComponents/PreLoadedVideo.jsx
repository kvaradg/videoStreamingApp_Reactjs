import React, { useRef, useState } from "react";
import VIDEO from "./Ranjha.mp4";
import Styles from "./video.module.css";
import { HiOutlinePlay } from "react-icons/hi";
import { MdOutlineMotionPhotosPause } from "react-icons/md";
const PreLoadedVideo = () => {
  let videoRef = useRef();
  let [play, setPlay] = useState(true);

  let VideoControls = () => {
    setPlay(!play);
    if (play) {
      videoRef.current.pause();
      videoRef.current.muted = true;
    } else {
      videoRef.current.play();
      videoRef.current.muted = false;
    }
  };

  return (
    <section className={Styles.videoBlock}>
      <div className={Styles.video_desc}>
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
          optio.
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          repellendus illo adipisci harum dolorem? Ratione ipsam{" "}
        </p>

        <p>
          <main onClick={VideoControls}>
            {play ? (
              <aside className={Styles.videoAside}>
                <MdOutlineMotionPhotosPause className={Styles.videoPlay} />
                <span>Pause</span>
              </aside>
            ) : (
              <aside className={Styles.videoAside}>
                <HiOutlinePlay className={Styles.videoPlay} />
                <span>Play</span>
              </aside>
            )}
          </main>
        </p>
      </div>

      <video
        src={VIDEO}
        ref={videoRef}
        className={Styles.videoBlockPlayer}
        muted
        autoPlay
      ></video>
    </section>
  );
};

export default PreLoadedVideo;
