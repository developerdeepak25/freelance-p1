// import { Box } from "@mui/material";
// import theme from "../../theme/theme";
// import LockIcon from "../../assets/LockIcon";

// const TrackerDay = ({ dayNumber }) => {
//   return (
//     <>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "1.5px",
//           alignItems: "center",
//           fontSize: "18px",
//           color: "#8E8E8E",
//           fontWeight: "600",
//           [theme.breakpoints.up("xs")]: {
//             fontSize: "12px",
//           },
//           [theme.breakpoints.up("sm")]: {
//             fontSize: "18px",
//           },
//           [theme.breakpoints.up("lg")]: {
//             fontSize: "18px",
//           },
//         }}
//         className="tracker-day"
//       >
//         <Box sx={{ color: "inherit" }}>Day</Box>
//         <Box sx={{ color: "inherit" }}>{dayNumber}</Box>
//         <Box
//           sx={{
//             height: "46px",
//             aspectRatio: "1/1",
//             borderRadius: "50%",
//             display: "grid",
//             placeItems: "center",
//             border: "1.17px solid #8E8E8E",
//             [theme.breakpoints.up("xs")]: {
//               height: "28px",
//             },
//             [theme.breakpoints.up("sm")]: {
//               height: "46px",
//             },
//             [theme.breakpoints.up("lg")]: {
//               height: "46px",
//             },
//           }}
//         >
//           <LockIcon />
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default TrackerDay;

import { Box } from "@mui/material";
// import { Flame, Cube, Circle } from "lucide-react";
import LockIcon from "../../assets/LockIcon";
import FlameIcon from "../../assets/FlameIcon";
import IceCube from "../../assets/IceCube";

const TrackerDay = ({ dayNumber, status }) => {
  const getIcon = () => {
    switch (status) {
      case "completed":
        return <FlameIcon />;
      case "failed":
        return <IceCube />;
      case "upcoming":
        return null;
      case "current":
        return null;
      case "locked":
      default:
        return <LockIcon />;
    }
  };

  const getColor = () => {
    switch (status) {
      case "completed":
        return "#fff";
      case "failed":
        return "#fff";
      case "upcoming":
        return "#8E8E8E";
      case "current":
        return "#5CC9B5";
      case "locked":
      default:
        return "#8E8E8E";
    }
  };

  const getBorder = () => {
    if (status === "completed" || status === "failed") {
      return "none";
    }
    return `1.17px solid ${getColor()}`;
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5px",
        alignItems: "center",
        fontSize: "18px",
        color: getColor(),
        fontWeight: "600",
        "@media (max-width: 600px)": {
          fontSize: "12px",
        },
        "@media (min-width: 601px)": {
          fontSize: "18px",
        },
      }}
      className="tracker-day"
    >
      <Box sx={{ color: "inherit" }}>Day</Box>
      <Box sx={{ color: "inherit" }}>{dayNumber}</Box>
      <Box
        sx={{
          height: "46px",
          aspectRatio: "1/1",
          borderRadius: "50%",
          display: "grid",
          placeItems: "center",
          border: getBorder(),
          "@media (max-width: 600px)": {
            height: "28px",
          },
          "@media (min-width: 601px)": {
            height: "46px",
          },
        }}
      >
        {getIcon()}
      </Box>
    </Box>
  );
};

export default TrackerDay;
