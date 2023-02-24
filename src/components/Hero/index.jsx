import { Cover, Tags, Title, Actions, MetaData } from "./components/index";
import Button from "../Button";
import { MOVIES } from "../../config/constants";

import styles from "./styles.module.css";

const Hero = () => {
  const movie = MOVIES[0];

  const yearCalc = () => {
    const release = movie.release;
    const date = release.split("");
    const year = date.slice(0, 4);
    return year
  }

  const durationCalc = () => {
    const duration = movie.duration
    const hours = (duration / 60)
    const rHours = Math.floor(hours)
    const minutes = (hours - rHours) * 60
    const rMinutes = Math.round(minutes)
    return rHours + 'hrs' + rMinutes + "'"
  }

  const releaseCalc = () => {
      const release = movie.release
      const date = new Date(release)
      const day = date.getDate()
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      const monthIDX = date.getMonth()
      const year = date.getFullYear()
      return day + ' ' + months[monthIDX] + ' ' + year
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.info}>
          <Tags categories={movie.categories} />
          <Title title={movie.title} year={yearCalc(movie.release)} />
          <Actions />
          <MetaData
            stars={movie.stars}
            duration={durationCalc(movie.duration)}
            rated={movie.rated}
            release={releaseCalc(movie.release)}
            />
            <Button>PLAY</Button>
        </div>
        <Cover src={movie.cover} />
      </div>
    </div>
  );
};

export default Hero;
