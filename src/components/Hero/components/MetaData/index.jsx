import starIMG from './star.png'

import styles from './styles.module.css'

const MetaData = ({stars, duration, rated, release}) => {
  return (
    <div className={styles.container}>
        <ul className={styles.container}>
      <span className={styles.img}>
          <img height='25px' width='25px' src={starIMG} />
        {stars}/10
      </span>
          <li>
        Run time: {duration}
          </li>
          <li>
        Rated {rated}
          </li>
          <li>
        Release: {release}
          </li>
        </ul>
    </div>
  )
}

export default MetaData