import { Box, Typography } from "@mui/material";
import React from "react";
import Wave from "../../assets/illustrations/Wave";
import CBButton from "../buttons/CBButton";
import ArrowIcon2 from "../../assets/ArrowIcon2";
import theme from "../../theme/theme";

const TroubleAssistance = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "space-between",
        padding: "30px 25px",
        [theme.breakpoints.up("xs")]: {
          padding: "20px 15px",
        },
        [theme.breakpoints.up("sm")]: {
          padding: "30px 25px",
        },
        [theme.breakpoints.up("lg")]: {
          padding: "30px 25px",
        },
      }}
      className="rounder_section_secondary trouble-assistance-section"
    >
      <Box
        sx={{ position: "absolute", bottom: "0", left: "0", zIndex: "0" }}
        className="bg-wave"
      >
        <Wave />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          zIndex: "1",
        }}
        className="trouble-section-text-cb"
      >
        <div className="trouble-section-text">
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "32px",
              textTransform: "uppercase",
              [theme.breakpoints.up("xs")]: {
                fontSize: "20px",
              },
              [theme.breakpoints.up("sm")]: {
                fontSize: "32px",
              },
              [theme.breakpoints.up("lg")]: {
                fontSize: "32px",
              },
            }}
            className="color_violet"
          >
            HAVING
            <br /> trouble
          </Typography>
          <Typography
            sx={{
              fontWeight: "300",
              fontSize: "24px",
              [theme.breakpoints.up("xs")]: {
                fontSize: "13px",
              },
              [theme.breakpoints.up("sm")]: {
                fontSize: "24px",
              },
              [theme.breakpoints.up("lg")]: {
                fontSize: "24px",
              },
            }}
          >
            with your kid <br /> to do this habit{" "}
          </Typography>
        </div>

        <div className="trouble-section-btn">
          <CBButton varient="primary">
            <Box
              sx={{
                color: "#090A0B",
                fontSize: "inherit",
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              Deal with friction <ArrowIcon2 />
            </Box>
          </CBButton>
        </div>
      </Box>

      <Box
        sx={{
          zIndex: "1",
          display: 'grid',
          placeContent: "center",
          [theme.breakpoints.up("xs")]: {
            width: "149px",
          },
          [theme.breakpoints.up("sm")]: {
            width: "auto",
          },
          [theme.breakpoints.up("lg")]: {
            width: "auto",
          },
        }}
        className="trouble-assistance-illustration"
      >
        <img
          style={{ width: "100%", height: "auto" }}
          src="/illustrations/OBJECT.png"
        />
      </Box>
    </Box>
  );
};

export default TroubleAssistance;
