import styles from "./styles.module.css";

const Cover = ({src}) => {
  return (
    <div className={styles.container}>
      <img className={styles.coverIMG} src={src} />
    </div>
  )
}

export default Cover
