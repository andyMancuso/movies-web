import styles from "./styles.module.css";


const Tags = ({categories}) => {
  return (
    <div className={styles.container}>
      {categories.map((item) => {
        return (
            <div className={styles.tag}>{item}</div>
        );
      })}
    </div>
  );
};

export default Tags;
