import { MOVIES } from "../../config/constants";
import Button from "../Button";
import Card from "./components/Card";

import styles from "./styles.module.css";
import { useState, useEffect } from "react";

const ACTIONS = ["Random", "Popular", "Recent"];

const Discover = () => {
  const [view, setView] = useState(ACTIONS[0]);
  const [movies, setMovies] = useState(MOVIES)

  const [movieCount, setMovieCount] = useState(10);
  const [isAdding, setIsAdding] = useState(true);

  const sortFn = (a, b) => {
    if (view === "Random") {
      return 0.5 - Math.random();
    }

    if (view === "Popular") {
      if (b.stars === a.stars) {
        return b.release.localeCompare(a.release)
      }

      return b.stars - a.stars
    }

    if (view === "Recent") {
      return b.release.localeCompare(a.release);
    }
  };

  const handleDiscover = () => {
    const offset = isAdding ? 5 : -5

    const newCount = movieCount + offset

    setMovieCount(newCount)

    if (newCount === 10) setIsAdding(true)
    if (newCount === 20) setIsAdding(false)
  };


  useEffect(() => {
    const sortedMovies = [...movies].sort(sortFn)
    setMovies(sortedMovies)
    setMovieCount(10)
    setIsAdding(true)
  }, [view])


  return (
    <div className={styles.container}>
      
      <h3>Discover Movies</h3>

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

        <div className={styles.grid}>
          {movies
            .slice(0, movieCount)
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
