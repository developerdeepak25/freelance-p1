import PageWrapperWithFooter from "../../components/PageWrapper/PageWrapperWithFooter";
import { Box } from "@mui/material";
import "./Habit.css";
import HabitHeader from "../../components/HabitComponent/HabitHeader";
import HabitTracker from "../../components/HabitComponent/HabitTracker";
import InfoActionButtons from "../../components/HabitComponent/InfoActionButtons";
import TroubleAssistance from "../../components/HabitComponent/TroubleAssistance";
import ExplanationSection from "../../components/HabitComponent/ExplanationSection";
import theme from "../../theme/theme";

const Habit = () => {
  return (
    <PageWrapperWithFooter>
      <Box
        sx={{
          width: "824px",
          [theme.breakpoints.up("xs")]: {
            width: "100vw",
          },
          [theme.breakpoints.up("sm")]: {
            width: "765px",
          },
          [theme.breakpoints.up("lg")]: {
            width: "824px",
          },

          marginBottom: "40px",
        }}
        className="habit-container rounder_section_main"
      >
        {/* header Section with image */}
        <HabitHeader />

        {/* habit daily tracker */}
        <HabitTracker />

        {/* INfor action button */}
        <InfoActionButtons />

        {/* trouble assitane section */}
        <TroubleAssistance />

        {/* explaination section */}
        <ExplanationSection />
      </Box>
    </PageWrapperWithFooter>
  );
};

export default Habit;
