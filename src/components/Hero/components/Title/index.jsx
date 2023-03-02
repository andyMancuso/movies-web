import styles from "./styles.module.css";

const Title = ({ title, year }) => {
  return (
    <div className={styles.container}>
      <h1>
        {title} <span className={styles.year}>{year}</span>
      </h1>
    </div>
  );
};

export default Title;
