import styles from "./styles.module.css";

const Actions = ({ icon, title, first }) => {
  return (
    <div className={styles.container}>
      <button className={styles.buttonsContainer}>
        <span className={styles.iconContainer}> 
          {icon}
        </span>
        <h4>
          {title}
        </h4>
      </button>
    </div>
  );
};

export default Actions;


{/* <button className={styles.buttonsContainer}>
<span className={styles.buttonsIMG}>
  <BsFillPlayFill style={{
    marginLeft: 2,
    color: "#db2b42"
    }} size={33} />
</span>
<h4>watch trailer</h4>
</button>
<button className={styles.buttonsContainer}>
<span className={styles.buttonsIMG2}>
  <BsStarFill
    style={{
      marginTop: -1,
      color: "#db2b42",
    }}
    size={22}
  />
</span>
<h4>add favorite</h4>
</button>
<button className={styles.buttonsContainer}>
<span className={styles.buttonsIMG2}>
  <BsShareFill
    style={{
      marginRight: 3,
      marginLeft: -2,
      color: "#db2b42",
    }}
    size={22}
  />
</span>
<h4>share</h4>
</button> */}