import styles from "./styles.module.css";

const TopList = ({ img, name, score }) => {
  return (
      <div className={styles.eachReviewer}>
        <div className={styles.reviewerLeft}>
          <img src={img} alt="reviwer profile picture" />
          <h4>{name}</h4>
        </div>
        <span className={styles.score}>{score}</span>
      </div>
  );
};

export default TopList;
