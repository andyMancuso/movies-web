
import styles from "./styles.module.css"

const Button = ({children, onClick}) => {
    return (
      <div>
        <button onClick={onClick} className={styles.container}>{children}</button>
      </div>
    )
  }
  
  export default Button