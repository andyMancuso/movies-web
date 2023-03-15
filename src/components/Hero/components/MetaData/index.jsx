import { BsStarFill } from 'react-icons/bs'

import styles from './styles.module.css'

const MetaData = ({ stars, duration, rated, release }) => {
  return (
    <div className={styles.container}>
        <span className={styles.stars}>
          <BsStarFill color='yellow' size={14} />
          {stars}/10
        </span>
        <span className={styles.bullet}>
          Run time: {duration}
        </span>
        <span className={styles.bullet}>
          Rated {rated}
        </span>
        <span className={styles.bullet}>
          Release: {release}
        </span>
    </div>
  )
}

export default MetaData