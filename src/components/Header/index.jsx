import { Link } from "react-router-dom";
import Button from "../Button";
import streamiaIMG from "./streamia-logoooo.png";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.linkLogo} to="/">
        <img src={streamiaIMG} />
      </Link>
      <nav className={styles.navigation}>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/mylist">My Lists</Link>
      </nav>
      <Button>Log In</Button>
    </div>
  );
};

export default Header;
