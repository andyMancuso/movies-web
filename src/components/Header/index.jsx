import React, {useState} from 'react'

import { Link } from "react-router-dom";
import Button from "../Button";
import streamiaIMG from "./streamia-logoooo.png";

import styles from "./styles.module.css";

const Header = () => {

  const [showMenu, setShowMenu] = useState(false)

  const handleMenuClick = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>

      <Link className={styles.linkLogo} to="/">
        <img src={streamiaIMG} />
      </Link>
        <nav className={styles.navMenu}>
            <Link to="/movies">Movies</Link>
            <Link to="/tvshows">TV Shows</Link>
            <Link to="/mylist">My Lists</Link>
        </nav>
      </div>
      <div className={styles.right}>
        {/* <div className={styles.burgerMenu} onClick={handleMenuClick}>
          <div className={styles.lines}></div>
          <div className={styles.lines}></div>
          <div className={styles.lines}></div>
        </div>
          {showMenu && (
          <nav className={styles.navMenu}>
              <Link to="/movies">Movies</Link>
              <Link to="/tvshows">TV Shows</Link>
              <Link to="/mylist">My Lists</Link>
          </nav> 
          )} */}
        <Button>Log In</Button>
      </div>
    </div>
  );
};

export default Header;
