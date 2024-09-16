import { Box } from "@mui/material";
import CBButton from "../buttons/CBButton";
import theme from "../../theme/theme";
import TrackerDay from "../TrackerDay/TrackerDay";

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



export default HabitTracker;
