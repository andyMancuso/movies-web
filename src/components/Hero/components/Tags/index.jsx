import styles from "./styles.module.css";

const Tags = ({ categories }) => {
  return (
    <div className={styles.container}>
      {categories.map((item) => {
        if (categories === [0]) {
          return <div className={styles.tag}>{item}</div>;
        } else {
          return <div className={styles.multitag}>{item}</div>;
        }
      })}
    </div>
  );
};

export default Tags;
