import HabitTrackerGridCardWrapper from "../HabitTrackerGridCardWrapper/HabitTrackerGridCardWrapper";
import { Box } from "@mui/material";
import ArrowIcon2 from "../../../assets/ArrowIcon2";
import TrackerDay from "../../TrackerDay/TrackerDay";
import StreakCountDisplay from "../../StreakCountDisplay/StreakCountDisplay";
import PowerIcon from "../../../assets/PowerIcon";
import theme from "../../../theme/theme";

const trackerData = [
  { dayNumber: 1, status: "completed" },
  { dayNumber: 2, status: "failed" },
  { dayNumber: 3, status: "completed" },
  { dayNumber: 4, status: "current" },
  { dayNumber: 5, status: "upcoming" },
  // { dayNumber: 6, status: 'upcoming' },
  { dayNumber: 6, status: "locked" },
];
const HabitTrackerGridCardFeatured = () => {
  return (
    <HabitTrackerGridCardWrapper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box
          sx={{
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1.08px solid #000000",
            height: "64px",
            boxShadow: " 0px 4px 0px 0px #BAA1FF",

            padding: "0 20px",
            fontSize: "16px",
            [theme.breakpoints.up("xs")]: {
              height: "46px",
              boxShadow: " 0px 3px 0px 0px #BAA1FF",
            },
            [theme.breakpoints.up("sm")]: {
              boxShadow: " 0px 4px 0px 0px #BAA1FF",
              height: "64px",
            },
            [theme.breakpoints.up("lg")]: {
              boxShadow: " 0px 4px 0px 0px #BAA1FF",
              height: "64px",
            },
          }}
          className="header"
        >
          <Box
            sx={{
              fontSize: "22px",
              color: "#000000",
              fontWeight: "600",
              [theme.breakpoints.up("xs")]: {
                fontSize: "16px",
              },
              [theme.breakpoints.up("sm")]: {
                fontSize: "22px",
              },
              [theme.breakpoints.up("lg")]: {
                fontSize: "22px",
              },
            }}
          >
            Eating veggies and fruits
          </Box>
          <ArrowIcon2 />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: "1",
            gap: "20px",
            padding: "20px",
            justifyContent: "space-between",
            [theme.breakpoints.up("xs")]: {
              padding: "15px",
            },
            [theme.breakpoints.up("sm")]: {
              padding: "20px",
            },
            [theme.breakpoints.up("lg")]: {
              padding: "20px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              paddingTop: "10px",
              [theme.breakpoints.up("xs")]: {
                gap: "20px",
              },
              [theme.breakpoints.up("sm")]: {
                gap: "30px",
              },
              [theme.breakpoints.up("lg")]: {
                gap: "30px",
              },
            }}
            className="tracker-day"
          >
            {trackerData.map((item, index) => (
              <TrackerDay
                key={`trackerday${index + 1}`}
                dayNumber={item.dayNumber}
                status={item.status}
              />
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
             
            }}
            className="streak-count-and-stop-button"
          >
            <StreakCountDisplay />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontWeight: "600",
                fontSize: "17px",
                [theme.breakpoints.up("xs")]: {
                  fontSize: "12px",
                },
                [theme.breakpoints.up("sm")]: {
                  fontSize: "17px",
                },
                [theme.breakpoints.up("lg")]: {
                  fontSize: "17px",
                },
              }}
              className="stop-tracking color_violet"
            >
              <PowerIcon /> Stop tracking
            </Box>
          </Box>
        </Box>
      </Box>
    </HabitTrackerGridCardWrapper>
  );
};

export default HabitTrackerGridCardFeatured;
