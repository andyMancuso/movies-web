import styles from './styles.module.css'

const Trailer = ({ title, duration, img, onClick, currentTrailer }) => {
  return (
    <button className={styles.btnContainer} onClick={onClick} >
    <div className={`
    ${styles.trailerContainer}
    ${currentTrailer.title === title ? styles.trailerContainerSelected : ''}
    `}>
      <img className={styles.trailerIMG} src={img} alt={title} />
      <div className={styles.trailerData}>
        <h3>{title}</h3>
        <span>{duration}</span>
      </div>
    </div>
    </button>
  );
};

export default Trailer;
