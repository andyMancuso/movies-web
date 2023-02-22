
// import second from '../../..'

import styles from './styles.module.css'

const MetaData = ({stars, duration, rated, release}) => {
  return (
    <div className={styles.container}>
      <div>
        <ul>
          <img src='' />
        {stars}
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
    </div>
  )
}

export default MetaData