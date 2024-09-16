import { Box } from "@mui/material";

const CBButton = ({ children, varient = "primary" ,sx}) => {
  return (
    <Box sx={sx}
      className={`cb-button ${
        varient === "secondary" ? "secondary" : "primary"
      } `}
    >
      {children}
    </Box>
  );
};

export default CBButton;
