import Grid from "@mui/material/Grid2";
import HabitTrackerGridCardFeatured from "./HabitTrackerGridCardFeatured/HabitTrackerGridCardFeatured";
import { Box } from "@mui/material";

const HabitTrackerGrid = () => {
  return (
    // <Grid container spacing={2}>
    <Box sx={{
        display:"grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "16px",
    }}>

      <HabitTrackerGridCardFeatured />
      <HabitTrackerGridCardFeatured />
    </Box>
    // </Grid>
  );
};

export default HabitTrackerGrid;
