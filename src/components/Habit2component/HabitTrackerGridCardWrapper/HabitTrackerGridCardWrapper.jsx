import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import theme from "../../../theme/theme";

const HabitTrackerGridCardWrapper = ({ children }) => {
  return (
    // <Grid item xs={6} >
    <Box
      sx={{
        background: "#000000",
        border: " 1.53px solid #E0E0E0",
        borderRadius: "28px",
        height: "300px",
        overflow: "hidden",
        [theme.breakpoints.up("xs")]: {
          height: "215px",
          borderRadius: "18px",
        },
        [theme.breakpoints.up("sm")]: {
          height: "300px",
          borderRadius: "28px",
        },
        [theme.breakpoints.up("lg")]: {
          height: "300px",
          borderRadius: "28px",
        },
      }}
    >
      {children}
    </Box>
    // </Grid>
  );
};

export default HabitTrackerGridCardWrapper;
