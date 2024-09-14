import React from "react";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

// transitions are managed with custom css see index.css in this dir

// note no route for home exist it writen so that styles does not active because of '/' route
const NavItem = ({ text, icon, path="/home" }) => {
  return (
    // may change the color of icon when Navlink has active class
    <NavLink
      to={path}
      style={{ textDecoration: "none", color: "inherit" }}
      // className={({ isActive }) => (isActive ? "active-nav-item" : "")}
      className={'navItem'}
    >
      <Box
        sx={{
          borderRadius: "10px",
          backgroundColor: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
          padding: "10px",
          width: "48px",
          height: "48px",
          gap: "6px",
        }}
        className="navItem-content"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="navIcon"
        >
          {icon}
        </Box>
        <Typography
          sx={{
            display: "block",
            fontSize: "14px",
            fontWeight: "600",
            opacity: "0",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
          className="navText"
        >
          {text}
        </Typography>
      </Box>
    </NavLink>
  );
};

export default NavItem;
