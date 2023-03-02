import Button from "../Button";
// import streamiaIMG from './streamia-logo.png'
// import streamiaIMG from './streamed2.png'
import streamiaIMG from './streamia-logoooo.png'

import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img className={styles.img}src={streamiaIMG} />
      </div>
      <div className={styles.navigation}>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">TV Shows</a>
            </li>
            <li>
              <a href="#">My Lists</a>
            </li>
          </ul>
        </nav>
      </div>
      <Button>Log In</Button>
    </div>
  );
};

export default Header;
