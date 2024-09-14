import { Box } from "@mui/system";
import './button.css'

const RoundButton = ({ children, height = "52px", variant = "round" }) => {
  return (
    <Box
      sx={{
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        // boxShadow: "0.75px 1.5px 0px 0px #baa1ff",
        // backgroundColor: "#ffffff",

        // border: "0.75px solid #000000",
        // height: height, 
        // borderRadius: variant === "round" ? "50%" : "4px", 
        // aspectRatio: variant === "round" ? "1/1" : "auto", 
        // "&:hover": {
        //   // Optionally, add hover styles if needed
        //   backgroundColor: "#f0f0f0",
        // },

        
      }}
      className="btn btn-round"
    >
      {children}
    </Box>
  );
};

export default RoundButton;
