import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const SideMenu = ({ isOpen }) => {
  return (
    <div 
      style={{ right: isOpen ? 0 : -250 }}
      className={styles.container}
    >
      <nav className={styles.navMenu}>
        <Link to="/movies">Movies</Link>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/mylist">My Lists</Link>
      </nav>

      <button>Login</button>
    </div>
  );
};

export default SideMenu;
