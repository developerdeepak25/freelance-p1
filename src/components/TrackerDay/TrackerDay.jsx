import { Box } from "@mui/material";
import theme from "../../theme/theme";
import LockIcon from "../../assets/LockIcon";

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

export default TrackerDay;
