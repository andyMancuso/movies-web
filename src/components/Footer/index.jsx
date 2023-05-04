
import { Link } from 'react-router-dom'
import Button from '../Button'
import styles from '../Footer/styles.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.categories}>
            <h2>Categories</h2>
            <Link>terror</Link>
            <Link>action</Link>
            <Link>suspense</Link>
            <Link>drama</Link>
            <Link>documentals</Link>
          </div>
          <div className={styles.about}>
            <h2>about</h2>
            <Link>website</Link>
            <Link>terms and conditions</Link>
            <Link>contact</Link>
          </div>
        </div>
        <div className={styles.newsletter}>
          <h3>newsletter</h3>
          <p>
            Suscribe to our newsletter and access exclusive content about the latest movie releases 
          </p>
          <span className={styles.textInput}>
            <input type="text" placeholder=' Please insert your e-mail' />
            <Button>sign up</Button>
          </span>
          <span className={styles.checkInput}>
            <input type="checkbox" name="" id="" />
            <p>
              I accept proccessing my e-mail address with the aim of receiveing information about Stream.ia, including marketing and sales information. 
            </p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer