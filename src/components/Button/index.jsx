import styles from "./styles.module.css";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={styles.container}
    >
      {children}
    </button>
  );
};

export default Button;
