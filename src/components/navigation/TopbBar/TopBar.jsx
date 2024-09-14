import { Box } from "@mui/material";
import Hanburger from "../../../assets/navIcons/Hanburger";
import AddIcon from "../../../assets/AddIcon";
import theme from "../../../theme/theme";
import BellIcon from "../../../assets/navIcons/BellIcon";
import TopBarButton from "../../buttons/TopBarButton";

const TopBar = () => {
  return (
    <Box
      sx={{
        height: "65px",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: "999",
        background: "#000",
        [theme.breakpoints.up("lg")]: {
          display: "none",
        },
        [theme.breakpoints.up("xs")]: {
          display: "block",
        },
      }}
      className="topbar"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
        className="topbar-content"
      >
        <Hanburger />
        <TopBarButton>
          <Box sx={{ display: "flex", gap: "8px" ,padding:'4px' }} className="topbar-button-layout">
            <Box
              sx={{
                borderRadius: "50%",
                overflow: "hidden",
                height: "30px",
                aspectRatio: "1/1",
              }}
            >
              <img
                style={{ height: "100%", width: "100%" }}
                src="/images/dummyprofile.png"
              />
            </Box>
            <Box
              sx={{
                color: "#000",
                fontSize: "14px",
                fontWeight: "500",
                display: "grid",
                placeItems: "center",

              }}
            >
              Subrahma...
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: " #A17FFF;",
                borderRadius: "50%",
                aspectRatio: "1/1",
                width: "30px",
              }}
            >
              <AddIcon />
            </Box>
          </Box>
        </TopBarButton>
        <Box sx={{
            padding: "12px",
        }}>

        <BellIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default TopBar;
