import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";


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
          
        }}
      >
        {children}
      </Box>
    // </Grid>
  );
};

export default HabitTrackerGridCardWrapper;
