import { Cover, Tags, Title, Actions, MetaData } from "./components/index";
import Button from "../Button";
import { MOVIES } from "../../config/constants";
import { yearCalc, durationCalc, releaseCalc} from '../../utils/dates'

import styles from "./styles.module.css";

const Hero = () => {
  const movie = MOVIES[0];

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
            <span className={styles.playbtn}>
             <Button>PLAY</Button>
            </span>
        </div>
        <Cover src={movie.cover} />
      </div>
    </div>
  );
};

export default Hero;
