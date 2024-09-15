import { Box, Typography } from "@mui/material";
import GradientButton from "../buttons/GradientButton";
import theme from "../../theme/theme";

const ExplanationSection = () => {
  return (
    <Box
      sx={{
        padding: "30px 20px",
        background: "#000",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        [theme.breakpoints.up("xs")]: {
          padding: "20px 15px",
          gap: "20px",
        },
        [theme.breakpoints.up("sm")]: {
          padding: "30px 20px",
          gap: "24px",
        },
        [theme.breakpoints.up("lg")]: {
          padding: "30px 20px",
          gap: "24px",
        },
      }}
      className="rounder_section_secondary explanation-section"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          [theme.breakpoints.up("xs")]: {
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "12px",
          },
          [theme.breakpoints.up("sm")]: {
            flexDirection: "row",
            alignItems: "center",

          },
          [theme.breakpoints.up("lg")]: {
            flexDirection: "row",
            alignItems: "center",

          },
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "600",
            [theme.breakpoints.up("xs")]: {
                fontSize: "18px",
            },
            [theme.breakpoints.up("sm")]: {
                fontSize: "20px",
            },
            [theme.breakpoints.up("lg")]: {
                fontSize: "20px",
            },
          }}
        >
          Why should you do it?
        </Typography>
        <Box sx={{ display: "flex", gap: "10px" }} className="explanation-cbs">
          <GradientButton>Master habit</GradientButton>
          <GradientButton>4 years to 6 years</GradientButton>
        </Box>
      </Box>
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "400",
          [theme.breakpoints.up("xs")]: {
            fontSize: "12px",
          },
          [theme.breakpoints.up("sm")]: {
            fontSize: "16px",
          },
          [theme.breakpoints.up("lg")]: {
            fontSize: "16px",
          },
        }}
      >
        Making your bed each morning might seem like a small, mundane task, but
        it can have a profound impact on your day and overall well-being. Here’s
        why incorporating this simple habit into your daily routine can be
        beneficial:{" "}
      </Typography>
    </Box>
  );
};

export default ExplanationSection;
