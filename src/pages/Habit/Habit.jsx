import React from "react";
import PageWrapperWithFooter from "../../components/PageWrapper/PageWrapperWithFooter";
import { Box } from "@mui/material";

const Habit = () => {
  return (
    <PageWrapperWithFooter>
      <Box
        sx={{
          width: "824px",
        }}
        className="habit-container rounder_section_main"
      >
      {/* header Section with image */}
        <Box
          sx={{ width: "744px", height: "418px", position: "relative" }}
          className="header-image-section"
        >
          <img src="/public/images/HabitSectionHeaderImage.png" />
          <Box>
            
          </Box>
        </Box>

      </Box>
    </PageWrapperWithFooter>
  );
};

export default Habit;
