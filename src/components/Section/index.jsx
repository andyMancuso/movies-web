const Section = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        border: '2px solid red',
        minHeight: '100vh',
        height: '100%',
        width: '100%'
      }}
    >
      {children}
    </div>
  );
};

export default Section;
