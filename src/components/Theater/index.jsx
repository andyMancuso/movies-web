import { useState } from "react";

import { Trailer, Celebrity } from "./components";

import styles from "./styles.module.css";

import { MOVIES_TRAILERS } from "../../config/constants";
import ReactPlayer from "react-player";


// const Button1 = ({ text }) => <button>{text}</button>

// const Button2 = () => (
//   <button>Hola</button>
// )

// const Button3 = () => {
//   return <button>Hola</button>
// }

// const Button4 = () => {
//   return (
//     <button>Hola</button>
//   )
// }


// const suma1 = (x, y) => x + y

// const suma2 = (x, y) => {
//   return x + y
// }


const Theater = () => {
  const [currentTrailer, setCurrentTrailer] = useState(MOVIES_TRAILERS[0]);
  const [isSelected, setIsSelected] = useState(MOVIES_TRAILERS[0]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>in theater</h2>

        <div className={styles.content}>
            <div className={styles.leftContent}>
              <div className={styles.videoContainer}>
                <ReactPlayer
                  url={currentTrailer.video}
                  width="100%"
                  height="100%"
                  // style={{aspectRatio:16/9}}
                />
              </div>

              <div className={styles.trailerList}>
                {MOVIES_TRAILERS.map((item) => (
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
                ))}
              </div>
            </div>

          <div className={styles.rightContent}>
            <h4>cast</h4>
            <div className={styles.actorList}>
              <Celebrity cast={currentTrailer.cast} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theater;
