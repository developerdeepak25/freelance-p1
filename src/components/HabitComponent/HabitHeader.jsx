import { Box, Typography } from "@mui/material";
import "./HabitComponent.css";
import theme from "../../theme/theme";

const HabitHeader = () => {
  return (
    <Box
      sx={{
        // width: "744px",
        width: "100%",
        height: "418px",
        [theme.breakpoints.up("xs")]: {
          height: "215px",
          borderRadius: "0px",
        },
        [theme.breakpoints.up("sm")]: {
          height: "418px",
          borderRadius: "6px",
        },
        [theme.breakpoints.up("lg")]: {
          height: "418px",
          borderRadius: "6px",
        },
        position: "relative",
        overflow: "hidden",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="header-image-section"
    >
      <img
        className="header-image"
        src="/images/HabitSectionHeaderImage.png"
        // style={{minHeight:'100%', minWidth: '100%', backgroundPosition: 'center', backgroundSize: 'cover'}}
      />
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          background:
            "linear-gradient(360deg, #000000 -11.09%, rgba(0, 0, 0, 0) 60.76%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          [theme.breakpoints.up("xs")]: {
            background:
              "linear-gradient(360deg, #000000 -10.47%, rgba(1, 1, 1, 0) 100%)",
          },
          [theme.breakpoints.up("sm")]: {
            background:
              "linear-gradient(360deg, #000000 -11.09%, rgba(0, 0, 0, 0) 60.76%)",
          },
          [theme.breakpoints.up("lg")]: {
            background:
              "linear-gradient(360deg, #000000 -11.09%, rgba(0, 0, 0, 0) 60.76%)",
          },
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            bottom: "20px",
            left: "15px",
            fontSize: "22px",
            fontWeight: "600",
            [theme.breakpoints.up("xs")]: {
              position: "relative",
              fontSize: "30px",
              textTransform: "uppercase",
              width: "70%",
              textAlign: "center",
              left: "0",
              bottom: "0",
            },
            [theme.breakpoints.up("sm")]: {
              position: "absolute",
              fontSize: "22px",
              textTransform: "none",
              width: "auto",
              left: "15px",
              bottom: "20px",
            },
            [theme.breakpoints.up("lg")]: {
              position: "absolute",
              fontSize: "22px",
              textTransform: "none",
              width: "auto",
              left: "15px",
              bottom: "20px",
            },
          }}
        >
          Make your bed daily
        </Typography>
      </Box>
    </Box>
  );
};

export default HabitHeader;
