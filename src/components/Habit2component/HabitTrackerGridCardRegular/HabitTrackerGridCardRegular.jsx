import { Box } from "@mui/material";
import HabitTrackerGridCardWrapper from "../HabitTrackerGridCardWrapper/HabitTrackerGridCardWrapper";
import CBButton from "../../buttons/CBButton";
import theme from "../../../theme/theme";

const HabitTrackerGridCardRegular = () => {
  return (
    <HabitTrackerGridCardWrapper>
      <Box
        sx={{
          overflow: "hidden",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0",
            left: "0",
          }}
          className="regualar-card-image"
        >
          <img
            style={{
              minHeight: "100%",
              minWidth: "100%",
              objectFit: "cover",
              position: "absolute",
            }}
            src="/images/swirls.png"
          />
          <Box
            sx={{
              background:
                "linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
              height: "100%",
              width: "100%",
              position: "absolute",
            }}
          ></Box>
        </Box>

        <Box
          sx={{
            zIndex: "1",
            width: "100%",
            height: "100%",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingTop: "60px",
            [theme.breakpoints.up("xs")]: {
            paddingTop: "40px",
            },
            [theme.breakpoints.up("sm")]: {
            paddingTop: "60px",
            },
            [theme.breakpoints.up("lg")]: {
            paddingTop: "60px",
            },
          }}
          className="regular-card-content"
        >
          <Box
            sx={{
              fontSize: "43.52px",
              fontWeight: "600",
              textAlign: "center",
              textTransform: "uppercase",
              [theme.breakpoints.up("xs")]: {
                fontSize: "30px",
              },
              [theme.breakpoints.up("sm")]: {
                fontSize: "43.52px",
              },
              [theme.breakpoints.up("lg")]: {
                fontSize: "43.52px",
              },
            }}
          >
            Make your
            <br /> bed daily
          </Box>
          <Box
            sx={{
              display: "grid",
              width: "100%",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
            className="callback-Buttons"
          >
            <CBButton>Learn more</CBButton>
            <CBButton>Start tracking</CBButton>
          </Box>{" "}
        </Box>
      </Box>
    </HabitTrackerGridCardWrapper>
  );
};

export default HabitTrackerGridCardRegular;
