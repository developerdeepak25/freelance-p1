import React from "react";
import HabitTrackerGridCardWrapper from "../HabitTrackerGridCardWrapper/HabitTrackerGridCardWrapper";
import { Box } from "@mui/material";
import ArrowIcon2 from "../../../assets/ArrowIcon2";

const HabitTrackerGridCardFeatured = () => {
  return (
    <HabitTrackerGridCardWrapper>
      <Box
        sx={{
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1.08px solid #000000",
          height: "64px",
          boxShadow: "box-shadow: 0px 4.43px 0px 0px #BAA1FF",
          padding: "0 20px" ,
        }}
        className="header"
      >
        <Box sx={{ fontSize: "22px", color: "#000000", fontWeight: "600" }}>
          Eating veggies and fruits
        </Box>
        {/* <Box> */}
            <ArrowIcon2 />
        {/* </Box> */}
      </Box>

      
    </HabitTrackerGridCardWrapper>
  );
};

export default HabitTrackerGridCardFeatured;
