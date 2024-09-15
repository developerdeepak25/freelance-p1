
const CBButton = ({ children, varient = "primary" }) => {
  return (
    <div
      className={`cb-button ${
        varient === "secondary" ? "secondary" : "primary"
      } `}
    >
      {children}
    </div>
  );
};

export default CBButton;
