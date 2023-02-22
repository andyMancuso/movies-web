import { Cover, Tags, Title, Actions, MetaData } from "./components/index";
import Button from "../Button";
import { MOVIES } from "../../config/constants";

import styles from "./styles.module.css";

const Hero = () => {
  const movie = MOVIES[0];
  // const release = new Date (movie.release)
  // console.log(movie.release)
  const release = movie.release;
  const date = release.split("");
  const year = date.slice(0, 4);
  console.log(year);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.info}>
          <Tags categories={movie.categories} />
          <Title title={movie.title} year={year} />
          <Actions />
          <MetaData
            stars={movie.stars}
            duration={movie.duration}
            rated={movie.rated}
            release={movie.release}
          />
        </div>
        <Cover src={movie.cover} />
      </div>
    </div>
  );
};

export default Hero;
