import playButton from './assets/play-button.png'
import favButton from './assets/favourite-button.png'
import shareButton from './assets/share-button.png'

import styles from './styles.module.css'

const Actions = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <img height='35px' width='35px' src={playButton}/>
        <h4>WATCH TRAILER</h4>
      </div>
      <div className={styles.buttons}>
        <img height='40px' width='40px' src={favButton}/>
        <h4>ADD FAVORITE</h4>
      </div>
      <div className={styles.buttons}>
        <img height='40px' width='40px' src={shareButton}/>
        <h4>SHARE</h4>
      </div>
    </div>
  )
}

export default Actions