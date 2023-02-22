import styles from "./styles.module.css";

const Cover = ({src}) => {
  return (
    <div className={styles.container}>
      <img style={{
        border: '3px solid orange'
      }}height='100%' width='100%' src={src} />
    </div>
  )
}

export default Cover
