import React, { useState } from "react";

import { Link } from "react-router-dom";
import Button from "../Button";
import SideMenu from "./SideMenu";
import streamiaIMG from "../../assets/logo.png";
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

import styles from "./styles.module.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => setShowMenu(true);
  const closeMenu = () => setShowMenu(false);

  // const toggleMenu = () => setShowMenu(prev => !prev);

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: showMenu ? "black" : "rgba(0, 0, 0, .6)" }}
    >
      <div className={styles.content}>

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

      <div className={styles.login}>
        <Button>Log In</Button>
      </div>

      <Button
        variant='outline'
        onClick={showMenu ? closeMenu : openMenu}
        className={styles.btnMenu}
      >
        {showMenu
          ? <AiOutlineClose size={22} style={{color: 'white', marginTop: '7px'}} />
          : <GiHamburgerMenu size={22} style={{marginTop: '8px'}}  />
        }
      </Button>

      {showMenu && <div className={styles.background} />}

      <SideMenu isOpen={showMenu} />
      {/* {showMenu && <SideMenu isOpen={showMenu} />} */}
      </div>

    </div>
  );
};

export default Header;

{
  /* <div className={styles.burgerMenu} onClick={handleMenuClick}>
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
          )} */
}

//   <div className={styles.container}>
//     <div className={styles.left}>
//       <Link className={styles.linkLogo} to="/">
//         <img src={streamiaIMG} />
//       </Link>

//       <nav className={`${styles.navMenu} ${showMenu ? styles.showMenu : ""}`}>
//         <Link to="/movies">Movies</Link>
//         <Link to="/tvshows">TV Shows</Link>
//         <Link to="/mylist">My Lists</Link>
//       </nav>
//     </div>
//     <div className={styles.right}>
//       <Button>Log In</Button>
//     </div>
//   </div>
// );
