import { Box, Typography } from "@mui/material";
import React from "react";
import LockIcon from "../../assets/LockIcon";
import CBButton from "../buttons/CBButton";
import theme from "../../theme/theme";

const HabitTracker = () => {
  return (
    <Box
      sx={{
        padding: "30px 20px ",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        overflow: "hidden",
        [theme.breakpoints.up("xs")]: {
          padding: "20px 15px",
        },
        [theme.breakpoints.up("sm")]: {
          padding: "30px 20px ",
        },
        [theme.breakpoints.up("lg")]: {
          padding: "30px 20px ",
        },
      }}
      className="rounder_section_secondary habit-tracker"
    >
      <Box
        sx={{
          display: "flex",
          gap: "35px",
          [theme.breakpoints.up("xs")]: {
            gap: "22px",
          },
          [theme.breakpoints.up("sm")]: {
            gap: "35px",
          },
          [theme.breakpoints.up("lg")]: {
            gap: "35px",
          },
        }}
        className="Habit-day-tracker "
      >
        {Array.from({ length: 9 }, (_, index) => (
          <TrackerDay key={"daytracker" + index + 1} dayNumber={index + 1} />
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="Habit-progress-tracker"
      >
        <Box
          sx={{
            border: "1.43px solid #BEBEBE",
            borderRadius: "12px",
            backgroundColor: "#000",
            padding: " 2px 14px",
            display: "grid",
            placeItems: "center",
            fontSize: "17px",
            height: "40px",
            [theme.breakpoints.up("xs")]: {
              height: "28px",
              fontSize: "12px",
            },
            [theme.breakpoints.up("sm")]: {
              height: "40px",
              fontSize: "17px",
            },
            [theme.breakpoints.up("lg")]: {
              height: "40px",
              fontSize: "17px",
            },
          }}
          className="day-streak-counter"
        >
          Habit Streak: 0/28 Days
        </Box>
        <CBButton varient="primary">
          <Box
            sx={{
              color: "#090A0B",
              fontSize: "inherit",
            }}
          >
            Start tracking
          </Box>
        </CBButton>
      </Box>
    </Box>
  );
};

const TrackerDay = ({ dayNumber }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5px",
          alignItems: "center",
          fontSize: "18px",
          color: "#8E8E8E",
          fontWeight: "600",
          [theme.breakpoints.up("xs")]: {
            fontSize: "12px",
          },
          [theme.breakpoints.up("sm")]: {
            fontSize: "18px",
          },
          [theme.breakpoints.up("lg")]: {
            fontSize: "18px",
          },
        }}
        className="tracker-day"
      >
        <Box sx={{ color: "inherit" }}>Day</Box>
        <Box sx={{ color: "inherit" }}>{dayNumber}</Box>
        <Box
          sx={{
            height: "46px",
            aspectRatio: "1/1",
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            border: "1.17px solid #8E8E8E",
            [theme.breakpoints.up("xs")]: {
              height: "28px",
            },
            [theme.breakpoints.up("sm")]: {
              height: "46px",
            },
            [theme.breakpoints.up("lg")]: {
              height: "46px",
            },
          }}
        >
          <LockIcon />
        </Box>
      </Box>
    </>
  );
};

export default HabitTracker;
