import { Link } from "react-router-dom";
import { MOVIES } from "../../config/constants";
import Button from "../Button";
import Card from "./components/Card";

import styles from "./styles.module.css";

const Discover = () => {
  const movie = MOVIES;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Discover Movies</h3>
        <nav className={styles.navMenu}>
          <Link to="/random">Random</Link>
          <Link to="/popular">Popular</Link>
          <Link to="/recent">Recent</Link>
        </nav>
        <div className={styles.searchBar}>
          <img src="" />
          <input placeholder="Enter a movie name"></input>
        </div>
      </div>

      <div className={styles.content}>
        {movie.map((item) => {
          return (
            // <div className={styles.card}>
            <Card
              title={item.title}
              img={item.cover}
              stars={item.stars}
              year={item.release}
              tags={item.categories}
            />
            // </div>
          );
        })}
      </div>
      <span className={styles.discoverBtn}>
        <Button>Discover More</Button>
      </span>
    </div>
  );
};

export default Discover;
