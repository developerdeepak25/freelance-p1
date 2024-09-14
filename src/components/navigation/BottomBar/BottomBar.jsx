import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { NavLink } from "react-router-dom";
import theme from "../../../theme/theme";
import ExploreIcon from "../../../assets/navIcons/ExploreIcon";
import HomeIcon from "../../../assets/navIcons/HomeIcon";
import ProgressIcon from "../../../assets/navIcons/ProgressIcon";
import GalleryIcon from "../../../assets/navIcons/GalleryIcon";

const BottomBar = () => {
  const [value, setValue] = useState(0);

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "#000",
        zIndex: 999,
        height: "65px",
        [theme.breakpoints.up("lg")]: {
          display: "none",
        },
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        sx={{
          height: "100%",
          background: "#000",
          fontFamily: "Poppins",
          "& .MuiBottomNavigationAction-root": {
            color: "#fff",
            "&.Mui-selected": {
              color: "#fff",
            },
          },
          "& .MuiBottomNavigationAction-label": {
            fontSize: "0.75rem",
          },
        }}
      >
        <BottomNavigationAction
          icon={<ExploreIcon />}
          label="Explore"
          component={NavLink}
          to="/explore"
          sx={{
            "&.Mui-selected": {
              "& .MuiBottomNavigationAction-label": {
                fontSize: "0.875rem",
                fontWeight: "bold",
              },
            },
          }}
        />
        <BottomNavigationAction
          icon={<HomeIcon />}
          label="To-Do"
          component={NavLink}
          to="/"
          sx={{
            "&.Mui-selected": {
              "& .MuiBottomNavigationAction-label": {
                fontSize: "0.875rem",
                fontWeight: "bold",
              },
            },
          }}
        />
        <BottomNavigationAction
          icon={<ProgressIcon />}
          label="Progress"
          component={NavLink}
          to="/progress"
          sx={{
            "&.Mui-selected": {
              "& .MuiBottomNavigationAction-label": {
                fontSize: "0.875rem",
                fontWeight: "bold",
              },
            },
          }}
        />
        <BottomNavigationAction
          icon={<GalleryIcon />}
          label="Cherish"
          component={NavLink}
          to="/cherish"
          sx={{
            "&.Mui-selected": {
              "& .MuiBottomNavigationAction-label": {
                fontSize: "0.875rem",
                fontWeight: "bold",
              },
            },
          }}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomBar;
