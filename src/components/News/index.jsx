import TopList from "./components/TopList";
import styles from "./styles.module.css";
import { FANDOM, REVIEWERS, MOVIES } from "../../config/constants";

const News = () => {
  const movie = MOVIES[3];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftContent}>
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
          <div className={styles.mainNotice}>
            <div className={styles.bigImgContainer}>
              <img
                src={
                  "https://variety.com/wp-content/uploads/2016/07/suicide-squad-18.jpg"
                }
                alt=""
              />
            </div>
            <span className={styles.mainNoticeData}>
              <span>2 Hours Ago - by Yoga</span>
              <h3>
                'Suicide Squad' Is a Hit, But DC Needs to Start Making Better
                Movies
              </h3>
              <p>
                There's an old adage that applies to the dillemma DC Comics
                currently faces. You can fool all the people some of the time
                and some of the people all the time, but you cannot fool all the
                people all the time.
              </p>
              <p>
                In the case of "Batman vs Superman: Dawn of Justice" and now
                "Suicide Squad", it can be argued that DC and Warner Bros
              </p>
              <button>
                <h4>read full article</h4>
              </button>
            </span>
          </div>

          <div className={styles.smallNoticesContainer}>
            <div className={styles.smallNotice}>
              <div className={styles.imgContainer}>
                <img
                  src={
                    "https://media.wired.com/photos/5926a12daf95806129f5018d/master.jpg"
                  }
                  alt=""
                />
              </div>
              <div className={styles.smallNoticeData}>
                <span>4 hours ago - by Rob</span>
                <h4>A new Rogue One trailer is coming very soon</h4>
              </div>
            </div>

            <div className={styles.smallNotice}>
              <div className={styles.imgContainer}>
                <img
                  src={
                    "https://media.npr.org/assets/img/2017/10/27/tra2016_comp_v005_008088.1111_wide-bc335cede10d086ba948db2d66f0093d36f0cc1e-s1100-c50.jpg"
                  }
                  alt=""
                />{" "}
              </div>
              <div className={styles.smallNoticeData}>
                <span>2 hours ago - by Rob</span>
                <h4>Thor: Ragnarok may feature this MCU Vehicle</h4>
              </div>
            </div>

            <div className={styles.smallNotice}>
              <div className={styles.imgContainer}>
                <img
                  src={
                    "https://www.giantfreakinrobot.com/wp-content/uploads/2021/05/Brie-Larson-Captain-Marvel-feature-900x506.jpg"
                  }
                  alt=""
                />
              </div>
              <div className={styles.smallNoticeData}>
                <span>2 hours ago - by Rob</span>
                <h4>
                  Brie Larson is already getting into character for captain
                  marvel, check it out
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
