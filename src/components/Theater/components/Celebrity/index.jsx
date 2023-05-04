import styles from "./styles.module.css";

const Celebrity = ({ cast }) => {
  return cast.map((item) => {
    return (
      <div className={styles.actorContainer}>
        <div className={styles.IMGContainer}>
          <img className={styles.actorIMG} src={item.img} alt="actor image" />
        </div>
        <div className={styles.actorNameContainer}>
          <h3>{item.name}</h3>
          <span>{item.role}</span>
        </div>
      </div>
    );
  });
};

export default Celebrity;
