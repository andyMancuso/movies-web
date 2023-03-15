import styles from "./styles.module.css";

import { BsStarFill } from 'react-icons/bs'

import { yearCalc} from '../../../../utils/dates'

const Card = ({title, year, img, stars, tags  }) => {
  return (
    <div className={styles.container}>
      <img src={img} alt='cover'/>
      <div className={styles.stars}>
        <span>
          <BsStarFill  />
        </span>
        {stars}
      </div>
        <span className={styles.metaData}>
          {yearCalc(year)} / {tags.join(', ')}
        </span>
        <span className={styles.title}>
          {title}
        </span>
    </div>
  )
};

export default Card;

// react-icons