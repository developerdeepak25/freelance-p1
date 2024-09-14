import PageWrapperWithFooter from "../../components/PageWrapper/PageWrapperWithFooter";
import { Box, Typography } from "@mui/material";
import "./Habit.css";
import HabitHeader from "../../components/HabitComponent/HabitHeader";
import HabitTracker from "../../components/HabitComponent/HabitTracker";
import InfoActionButtons from "../../components/HabitComponent/InfoActionButtons";

const Habit = () => {
  return (
    <PageWrapperWithFooter>
      <Box
        sx={{
          width: "824px",
          marginBottom: "40px",
        }}
        className="habit-container rounder_section_main"
      >
        {/* header Section with image */}
        <HabitHeader/>

        {/* habit daily tracker */}
        <HabitTracker/>

        {/* INfor action button */}
        <InfoActionButtons/>
      </Box>
    </PageWrapperWithFooter>
  );
};

export default Habit;
