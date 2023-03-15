import {BsFillPlayFill, BsStarFill, BsShareFill } from 'react-icons/bs'

import styles from './styles.module.css'

const Actions = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}> 
      <BsFillPlayFill size={25}/>
        <h4>watch trailer</h4>
      </div>
      <div className={styles.buttons}>
      <BsStarFill />
        <h4>add favorite</h4>
      </div>
      <div className={styles.buttons}>
      <BsShareFill />
        <h4>share</h4>
      </div>
    </div>
  )
}

export default Actions