import styles from "./styles.module.css";

const Title = ({ title, year }) => {
  return (
    <div className={styles.container}>
      <h1>
        {title} <span>{year}</span>
      </h1>
    </div>
  );
};

export default Title;
