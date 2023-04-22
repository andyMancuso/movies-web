import styles from "./styles.module.css";


const Button = ({
  children,
  onClick,
  variant = 'primary',
  className
}) => {

  const currentStyles = styles[variant]

  return (
    <button
      onClick={onClick}
      className={`${styles.base} ${currentStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
