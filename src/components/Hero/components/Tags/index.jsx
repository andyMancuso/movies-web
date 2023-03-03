import styles from "./styles.module.css";

const Tags = ({ categories }) => {
  return (
    <div className={styles.container}>
      {categories.map((item, idx) => {
       const currentClass = idx % 2 
        ? styles.orange
        : styles.red
       return <div className={currentClass}>{item}</div>;
      })}
    </div>
  );
};

export default Tags;
