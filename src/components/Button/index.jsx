
import styles from "./styles.module.css"

const Button = ({children}) => {
    return (
      <div>
        <button className={styles.container}>{children}</button>
      </div>
    )
  }
  
  export default Button