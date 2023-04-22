import { Cover, Tags, Title, Actions, MetaData } from "./components/index";
import Button from "../Button";
import { MOVIES } from "../../config/constants";
import { yearCalc, durationCalc, releaseCalc } from "../../utils/dates";
import { BsFillPlayFill, BsStarFill, BsShareFill } from "react-icons/bs";

import styles from "./styles.module.css";

const Hero = () => {
  const movie = MOVIES[0];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.info}>
          <Tags categories={movie.categories} />
          <Title title={movie.title} year={yearCalc(movie.release)} />
          
          <div className={styles.actionsContainer}>
          <Actions
            title={'watch trailer'}
            icon={<BsFillPlayFill color="#db2b42" size={26} style={{ marginRight: -2 }} />}
          />
          <Actions
            title={'add favorite'}
            icon={<BsStarFill color="#db2b42" size={18} style={{ marginTop: -1 }} />}
          />
          <Actions
            title={'share'}
            icon={<BsShareFill color="#db2b42" size={18} style={{ marginRight: 2 }} />}
          />
          </div>

          <MetaData
            stars={movie.stars}
            duration={durationCalc(movie.duration)}
            rated={movie.rated}
            release={releaseCalc(movie.release)}
          />

          <span className={styles.watchbtn}>
            <Button>watch now</Button>
          </span>
        </div>
        <Cover src={movie.cover} />
      </div>
    </div>
  );
};

export default Hero;
