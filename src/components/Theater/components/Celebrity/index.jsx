import styles from "./styles.module.css";

const Celebrity = ({ cast }) => {
  return cast.map((item) => {
    return (
      <div className={styles.actorContainer}>
        <img className={styles.actorIMG} src={item.img} alt="actor image" />
        <div className={styles.actorNameContainer}>
          <h3>{item.name}</h3>
          <span>{item.role}</span>
        </div>
      </div>
    );
  });
};

export default Celebrity;
