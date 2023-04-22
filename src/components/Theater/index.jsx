import { useState } from "react";

import { Trailer, Celebrity } from "./components";

import styles from "./styles.module.css";

import { MOVIES_TRAILERS } from "../../config/constants";

const Theater = () => {
  const [currentTrailer, setCurrentTrailer] = useState(MOVIES_TRAILERS[0]);
  const [isSelected, setIsSelected] = useState(MOVIES_TRAILERS[0]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>

        <div className={styles.leftContent}>
          <div className={styles.header}>
            <h3>in theater</h3>
          </div>

          <div style={{ display: "flex", width: '100%'}}>
          <div className={styles.videoContainer}>
            <iframe
              className={styles.videoPlayer}
              controls
              autoPlay
              type="video/mp4"
              src={currentTrailer.video}
              title="YouTube video player"
              frameborder="0"
              allowfullscreen
            />
          </div>

          <div className={styles.trailerList}>
            {MOVIES_TRAILERS.map((item) => {
              return (
                <Trailer
                  title={item.title}
                  duration={item.duration}
                  img={item.img}
                  onClick={() => {
                    setCurrentTrailer(item);
                    // if (currentTrailer === item) {
                    //   setIsSelected(currentTrailer)
                    // }
                  }}
                  key={item.title}
                  currentTrailer={currentTrailer}
                  // data = {item}
                />
              );
            })}
          </div>
          </div>
        </div>

        <div className={styles.rightContent}>
          <h4>spotlight celebrities</h4>
          <div className={styles.actorList}>
            <Celebrity cast={currentTrailer.cast} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Theater;
