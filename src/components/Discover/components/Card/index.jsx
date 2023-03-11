import styles from "./styles.module.css";

import { yearCalc} from '../../../../utils/dates'

const Card = ({title, year, img, stars, tags  }) => {
  return (
    <div className={styles.container}>
      <img src={img} alt='cover'/>
      <div className={styles.stars}>
        {stars}
      </div>
        <span className={styles.metaData}>
          {yearCalc(year)} / {tags}
        </span>
        <span className={styles.title}>
          {title}
        </span>
    </div>
  )
};

export default Card;

// Estilar card como componente y luego el container dentro del discover