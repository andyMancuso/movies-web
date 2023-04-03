import { MOVIES } from "../../config/constants";
import Button from "../Button";
import Card from "./components/Card";

import styles from "./styles.module.css";
import { useState } from "react";

const ACTIONS = ["Random", "Popular", "Recent"];

const Discover = () => {
  const [view, setView] = useState(ACTIONS[0]);

  const [movieQuantity, setMovieQuantity] = useState(10);
  const [isAdding, setIsAdding] = useState(true);
  console.log(isAdding);
  console.log(movieQuantity);
  console.log("this is movies lenght", MOVIES.length);

  const sortFn = (a, b) => {
    if (view === "Random") {
      return 0.5 - Math.random();
    }

    if (view === "Popular") {
      return b.stars - a.stars;
    }

    if (view === "Recent") {
      return b.release.localeCompare(a.release);
    }
  };

  const handleDiscover = () => {
    if (isAdding) {
      setMovieQuantity(movieQuantity + 5);
      if (movieQuantity === 20) {
        setIsAdding(false);
      }
    } else {
      setMovieQuantity(movieQuantity - 5);
    }
    if (movieQuantity === 15) {
      setIsAdding(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Discover Movies</h3>
      </div>

      <div className={styles.background}>

      <nav className={styles.navMenu}>
        {ACTIONS.map((action) => (
          <button
            key={action}
            onClick={() => setView(action)}
            className={`
              ${styles.actionBtn}
              ${view === action ? styles.actionActiveBtn : ""}
            `}
          >
            {action}
          </button>
        ))}
      </nav>

        <div className={styles.content}>
          {[...MOVIES]
            .sort(sortFn)
            .slice(0, movieQuantity)
            .map((item) => (
              <div key={item.title} className={styles.card}>
                <Card
                  title={item.title}
                  img={item.cover}
                  stars={item.stars}
                  year={item.release}
                  tags={item.categories}
                />
              </div>
            ))}
        </div>

        <span className={styles.discoverBtn}>
          <Button onClick={handleDiscover}>
            {isAdding ? "discover more" : "discover less"}
          </Button>
        </span>
      </div>
    </div>
  );
};

export default Discover;
