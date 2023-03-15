import styles from './styles.module.css'

const Trailer = ({ title, duration, video, img }) => {
  return (
    <div className={styles.trailerContainer}>
      <img className={styles.trailerIMG} src={img} alt={title} />
      <div className={styles.trailerData}>
        <span className={styles.trailerTitle}>{title}</span>
        <span className={styles.trailerDuration}>{duration}</span>
      </div>
    </div>
  );
};

export default Trailer;
