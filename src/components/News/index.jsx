import TopList from "./components/TopList";
import styles from "./styles.module.css";
import { FANDOM, REVIEWERS, MOVIES } from "../../config/constants";

const News = () => {
  const movie = MOVIES[3];

  return (
    <div className={styles.content}>
      <div className={styles.leftContent}>
        <h2>Hall of Fame</h2>
        <div className={styles.reviewersList}>
          <h3>Top Reviewers</h3>
          {REVIEWERS.map((item) => {
            return (
              <TopList img={item.img} name={item.name} score={item.score} />
            );
          })}
        </div>

        <div className={styles.fandomList}>
          <h3>Top Fandom</h3>
          {FANDOM.map((item) => {
            return (
              <TopList img={item.img} name={item.name} score={item.score} />
            );
          })}
        </div>
      </div>

      <div className={styles.rightContent}>
        <h1>news</h1>
        <div className={styles.mainNotice}>
          <img src={movie.img} alt="" />
          <span className={styles.mainNoticeData}>
          <span>2 hours ago - by Yoga</span>
            'Suicide Squad' Is a Hit, But DC Needs to Start Making Better Movies
            <p>
              There's an old adage that applies to the dillemma DC Comics
              currently faces. You can fool all the people some of the time and
              some of the people all the time, but you cannot fool all the
              people all the time.
            </p>
            <p>
              In the case of "Batman vs Superman: Dawn of Justice" and now
              "Suicide Squad", it can be argued that DC and Warner Bros...
            </p>
          </span>
        </div>
        <div className={styles.smallNoticesContainer}>
          <div className={styles.smallNotice}>
            <img src={movie.img} alt="" />
            <span className={styles.smallNoticeData}>
            <span>4 hours ago - by Yoga</span>
              A new Rogue One trailer is coming very soon
            </span>
          </div>

          <div className={styles.smallNotice}>
            <img src={movie.img} alt="" />
            <span className={styles.smallNoticeData}>
            <span>2 hours ago - by Yoga</span>
              Thor: Ragnarok may feature this MCU Vehicle
            </span>
          </div>

          <div className={styles.smallNotice}>
            <img src={movie.img} alt="" />
            <span className={styles.smallNoticeData}>
            <span>2 hours ago - by Yoga</span>
              Brie Larson is already getting into character for captain marvel, check it out
            </span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default News;
