import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ArrowIcon2 = () => {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));

  const height = isSmallDevice ? 10 : 23;
  // const width = isSmallDevice ? 13 : 19;

  return (
    <svg
      // width={width}
      height={height}
      viewBox="0 0 23 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.2574 9.40549L1.24121 9.40549"
        stroke="black"
        strokeWidth="2.00162"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.1846 17.4436L21.2578 9.40506L13.1846 1.36523"
        stroke="black"
        strokeWidth="2.00162"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon2;
