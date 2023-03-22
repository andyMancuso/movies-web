import { useState } from "react";

import { Trailer, Celebrity } from "./components";

import styles from "./styles.module.css";

import { MOVIES_TRAILERS } from "../../config/constants";

const Theater = () => {
  const [currentTrailer, setCurrentTrailer] = useState(MOVIES_TRAILERS[0]);


  return (
    <div className={styles.content}>
      <div className={styles.leftContent}>
        <div className={styles.videoContainer}>
          <span className={styles.theater}>in theater</span>
          {/* <video src={currentTrailer.video}></video> */}
          <iframe
            className={styles.videoPlayer}
            controls
            autoPlay
            type="video/mp4"
            src={currentTrailer.video}
            title="YouTube video player"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div className={styles.trailerList}>
          {MOVIES_TRAILERS.map((item) => {
            return (
              <Trailer
                title={item.title}
                duration={item.duration}
                img={item.img}
                onClick={() => setCurrentTrailer(item)}
                key={item.title}
                // data = {item}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.rightContent}>
        <span className={styles.celebrities}>spotlight celebrities</span>
        <div className={styles.actorList}>
          <Celebrity cast={currentTrailer.cast} />
        </div>
      </div>
    </div>
  );
};

export default Theater;
