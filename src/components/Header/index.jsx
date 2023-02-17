import Button from "../Button";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="../../assets/bg-hero.jpg"></img>
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
