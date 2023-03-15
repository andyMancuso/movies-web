import styles from "./styles.module.css";

import streamiaIMG from "./streamia-logoooo.png";

import { MOVIES_TRAILERS } from "../../config/constants";

const Theater = ({ title, duration, video, img }) => {
  const trailer = MOVIES_TRAILERS;

  return (
    <div className={styles.content}>
      <div className={styles.leftContent}>
        <div className={styles.videoPlayer}>
          <h2>in theater</h2>
          <video src={trailer[0].video}></video>
        </div>
        <div className={styles.trailerList}>
          <button>view all</button>
          {trailer.map((item) => {
            return (
              <div className={styles.trailerContainer}>
                  <img className={styles.trailerIMG} src={item.img} alt="" />
                  <span className={styles.trailerTitle}>{item.title}</span>
                  <span className={styles.trailerDuration}>{item.duration}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.rightContent}>
        <h2>spotlight celebrities</h2>
        <div className={styles.actorList}>
          <div className={styles.actor}>
            <img className={styles.actorIMG} src={streamiaIMG} alt="" />
            <span className={styles.actorName}>
              <span>Samuel R. Jack</span>
              ACTOR
            </span>
          </div>
          <div className={styles.actor}>
            <img className={styles.actorIMG} src={streamiaIMG} alt="" />
            <span className={styles.actorName}>
              <span>Samuel R. Jack</span>
              ACTOR
            </span>
          </div>
          <div className={styles.actor}>
            <img className={styles.actorIMG} src={streamiaIMG} alt="" />
            <span className={styles.actorName}>
              <span>Samuel R. Jack</span>
              ACTOR
            </span>
          </div>
          <div className={styles.actor}>
            <img className={styles.actorIMG} src={streamiaIMG} alt="" />
            <span className={styles.actorName}>
              <span>Samuel R. Jack</span>
              ACTOR
            </span>
          </div>
          <div className={styles.actor}>
            <img className={styles.actorIMG} src={streamiaIMG} alt="" />
            <span className={styles.actorName}>
              <span>Samuel R. Jack</span>
              ACTOR
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theater;
