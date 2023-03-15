import { useState} from 'react'

import Trailer from './components/Trailer';

import styles from "./styles.module.css";

import Jeffrey from "./assets/72.jpg"
import Sara from "./assets/79.jpg"

import { MOVIES_TRAILERS } from "../../config/constants";

const Theater = () => {
  const trailer = MOVIES_TRAILERS;

  const [playerID, setPlayerID] = useState()
  const [trailerIDX, setTrailerIDX] = useState()
  const [actorsID, setActorsID] = useState()
  
  const trailerFinder = (e) => {
    const itemClicked = e.target.value
   const idx = trailer.findIndex((item) => itemClicked)
    setTrailerIDX(idx)
    console.log(itemClicked)
  }
  

  return (
    <div className={styles.content}>
      <div className={styles.leftContent}>
        <div className={styles.videoContainer}>
          <span className={styles.theater}>in theater</span>
            <video src={trailer[0].video}></video>
        </div>
        <div className={styles.trailerList}>
          <button>view all</button>
          {trailer.map((item) => {
            return (
              <Trailer
                title={item.title}
                duration={item.duration}
                video={item.video}
                img={item.img}
                item={item.ID}
              />
              // <div className={styles.trailerContainer}>
              //     <img className={styles.trailerIMG} src={item.img} alt={item.title} />
              //     <div className={styles.trailerData}>
              //      <span className={styles.trailerTitle}>{item.title}</span>
              //       <span className={styles.trailerDuration}>{item.duration}</span>
              //     </div>
              // </div>
            );
          })}
        </div>
      </div>
      <div className={styles.rightContent}>
        <span className={styles.celebrities}>spotlight celebrities</span>
        <div className={styles.actorList}>
          <div className={styles.actorContainer}>
            <img className={styles.actorIMG} src={Jeffrey} alt="actor image" />
            <div className={styles.actorNameContainer}>
              <span className={styles.actorName}>Samuel R. Jack</span>
              <span className={styles.actorRole}>ACTOR</span>
            </div>
          </div>
          <div className={styles.actorContainer}>
            <img className={styles.actorIMG} src={Jeffrey} alt="actor image" />
            <div className={styles.actorNameContainer}>
              <span className={styles.actorName}>Benjamin Carrel</span>
              <span className={styles.actorRole}>ACTOR</span>
            </div>
          </div>
          <div className={styles.actorContainer}>
            <img className={styles.actorIMG} src={Sara} alt="actor image" />
            <div className={styles.actorNameContainer}>
              <span className={styles.actorName}>Beverly Griffin</span>
              <span className={styles.actorRole}>ACTOR</span>
            </div>
          </div>
          <div className={styles.actorContainer}>
            <img className={styles.actorIMG} src={Sara} alt="actor image" />
            <div className={styles.actorNameContainer}>
              <span className={styles.actorName}>Justin Valvier</span>
              <span className={styles.actorRole}>ACTOR</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theater;
