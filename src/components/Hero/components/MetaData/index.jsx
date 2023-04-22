import { BsStarFill } from "react-icons/bs";

import styles from "./styles.module.css";

const MetaData = ({ stars, duration, rated, release }) => {
  return (
    <div className={styles.container}>

      <div className={styles.dataContainer}>
          <h3>rating</h3>
        <span className={styles.stars}>
          <BsStarFill color="yellow" size={14} />
          {stars}
        </span>
      </div>
    <div className={styles.divider}></div>
      <div className={styles.dataContainer}>
         <h3>duration</h3>
          <span>
            {duration}
          </span>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.dataContainer}>
          <h3>rated</h3>
          <span>
            {rated}
          </span>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.dataContainer}>
        <h3>release</h3>
        <span>  
          {release}
        </span>
      </div>
    </div>
  );
};

export default MetaData;
