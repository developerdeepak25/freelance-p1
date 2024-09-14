import { Box } from "@mui/material";
import React from "react";
import LockIcon from "../../assets/LockIcon";

const HabitTracker = () => {
  return (
    <Box
      sx={{
        padding: "30px 20px ",
      }}
      className="rounder_section_secondary habit-tracker"
    >
      <Box sx={{ display: "flex", gap: "35px" }} className="Habit-day-tracker ">
            {Array.from({ length: 9 }, (_, index) => (

        <TrackerDay key={'daytracker' + index + 1} dayNumber={index + 1}/>

        ))}
      </Box>
    </Box>
  );
};

const TrackerDay = ({dayNumber}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5px",
          alignItems: "center",
        }}
        className="tracker-day"
      >
        <div>Day</div>
        <div>{dayNumber}</div>
        <Box
          sx={{
            height: "46px",
            aspectRatio: "1/1",
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            border: "1.17px solid #8E8E8E",
          }}
        >
          <LockIcon />
        </Box>
      </Box>
    </>
  );
};

export default HabitTracker;
