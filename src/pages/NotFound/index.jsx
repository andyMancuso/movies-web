import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Oops</h1>
        <h2>404 not found</h2>
        <span>
          <Link to="/">go to home</Link>
        </span>
      </div>
    </div>
  );
};

export default NotFound;