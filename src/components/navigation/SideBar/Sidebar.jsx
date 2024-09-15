import { Box } from "@mui/material";
import Logo from "../../../assets/navIcons/Logo";
import "./Sidebar.css";
import MenuIcon from "../../../assets/navIcons/MenuIcon";
import NotificationIcon from "../../../assets/navIcons/NotificationIcon";
import ExploreIcon from "../../../assets/navIcons/ExploreIcon";
import HomeIcon from "../../../assets/navIcons/HomeIcon";
import ProgressIcon from "../../../assets/navIcons/ProgressIcon";
import GalleryIcon from "../../../assets/navIcons/GalleryIcon";
import NavItem from "./NavItem";
import theme from "../../../theme/theme";
// import dummyProfileImage from "../../assets/images/dummyprofile.png";

const sidebarItems = [
  // { text: "Menu", icon: <MenuIcon /> },
  // { text: "Notification", icon: <NotificationIcon /> },
  { text: "Explore", icon: <ExploreIcon />, path: "/habit" },
  { text: "Todo", icon: <HomeIcon />, path: "/" },
  { text: "Progress", icon: <ProgressIcon />, path: "/habit2" },
  { text: "Cherish", icon: <GalleryIcon />, path: "/add-path" },
  // { text: "Subrah...", icon: < /> },, path:'/add-path'
];

// transistions are managed with custom css see index.css in this dir

const Sidebar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: "0",
        bottom: "0",
        height: "100vh",
        zIndex: "999",
        [theme.breakpoints.up("xs")]: {
          display: "none",
        },
        [theme.breakpoints.up("lg")]: {
          display: "flex",
        },
        // [theme.breakpoints.up("lg")]: {
        //   display: "flex",
        // },
      }}
      className="sidebar"
    >
      <Box
        sx={{
          position: "absolute",
          top: "44px",
          left: "20px",
        }}
        className="logo"
      >
        <Logo />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 20px",
          gap: "36px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "36px",
          }}
          className="navItemsList"
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <NavItem text="Menu" icon={<MenuIcon />} path="/add-path" />
            <NavItem
              text="Notification"
              icon={<NotificationIcon />}
              path="/add-path"
            />
          </Box>
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              background: "#000",
              borderRadius: "10px",
            }}
          >
            {sidebarItems.map((item, i) => {
              return (
                <NavItem
                  key={item.text + i}
                  text={item.text}
                  icon={item.icon}
                  path={item.path}
                />
              );
            })}
          </Box>
          <NavItem
            text="subrah alex doe"
            icon={<img height={32} width={32} src="/images/dummyprofile.png" />}
            path="/add-path"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
