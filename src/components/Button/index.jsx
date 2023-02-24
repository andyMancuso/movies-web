
const Button = ({children}) => {
    return (
      <div>
        <button style={{
          borderRadius: '8px',
          border: 'none',
          padding: '10px 20px',
  
        }}>{children}</button>
      </div>
    )
  }
  
  export default Button