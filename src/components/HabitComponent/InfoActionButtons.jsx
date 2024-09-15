import { Box, Typography } from "@mui/material";
import FlashLightIcon from "../../assets/FlashLightIcon";
import EmojiFunnyFaceIcon from "../../assets/EmojiFunnyFaceIcon";
import theme from "../../theme/theme";

const InfoActionButtons = () => {
  return (
    <Box
      sx={{ display: "grid", gap: "10px", gridTemplateColumns: "1fr 1fr" }}
      className="info-action-buttons"
    >
      <ActionButtons>
        <FlashLightIcon /> How to do it
      </ActionButtons>
      <ActionButtons>
        <EmojiFunnyFaceIcon />
        Child psyche
      </ActionButtons>
    </Box>
  );
};

const ActionButtons = ({ children }) => {
  return (
    <Box
      sx={{
        display: "grid",
        placeContent: "center",
        gap: "10px",
        background: "#242424",
        boxShadow: "0px 4px 0px 0px #0000000D",
        height: "59px",
        borderRadius: "10px",
        [theme.breakpoints.up("xs")]: {
          height: "46px",
        },
        [theme.breakpoints.up("sm")]: {
          height: "59px",
        },
        [theme.breakpoints.up("lg")]: {
          height: "59px",
        },
      }}
    >
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Poppins",
          fontSize: "18px",
          fontWeight: 600,
          textAlign: "center",
          gap: "6px",
          lineHeight: "22px",
          [theme.breakpoints.up("xs")]: {
            fontSize: "14px",
          },
          [theme.breakpoints.up("sm")]: {
            fontSize: "18px",
          },
          [theme.breakpoints.up("lg")]: {
            fontSize: "18px",
          },
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default InfoActionButtons;
