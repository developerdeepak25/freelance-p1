import Grid from "@mui/material/Grid2";
import HabitTrackerGridCardFeatured from "./HabitTrackerGridCardFeatured/HabitTrackerGridCardFeatured";
import { Box } from "@mui/material";
import HabitTrackerGridCardRegular from "./HabitTrackerGridCardRegular/HabitTrackerGridCardRegular";
import theme from "../../theme/theme";

const HabitTrackerGrid = () => {
  return (
    // <Grid container spacing={2}>
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "16px",
        [theme.breakpoints.up("xs")]: {
          gridTemplateColumns: " 1fr",
        },
        [theme.breakpoints.up("sm")]: {
          // gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateColumns: " 1fr",
        },
        [theme.breakpoints.up("lg")]: {
          gridTemplateColumns: "repeat(2, 1fr)",
        },
      }}
    >
      <HabitTrackerGridCardFeatured />
      {Array.from({ length: 7 }, (_, index) => (
        <HabitTrackerGridCardRegular key={"daytracker" + index} />
      ))}
    </Box>
    // </Grid>
  );
};

export default HabitTrackerGrid;
