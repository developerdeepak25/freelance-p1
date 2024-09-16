import theme from '../../theme/theme';
import { Box } from '@mui/material';

const StreakCountDisplay = () => {
  return (
    <Box
      sx={{
        border: "1.43px solid #BEBEBE",
        borderRadius: "12px",
        backgroundColor: "#000",
        padding: " 2px 14px",
        display: "grid",
        placeItems: "center",
        fontSize: "17px",
        height: "40px",
        [theme.breakpoints.up("xs")]: {
          height: "28px",
          fontSize: "12px",
        },
        [theme.breakpoints.up("sm")]: {
          height: "40px",
          fontSize: "17px",
        },
        [theme.breakpoints.up("lg")]: {
          height: "40px",
          fontSize: "17px",
        },
      }}
      className="day-streak-counter"
    >
      Habit Streak: 0/28 Days
    </Box>
  );
}

export default StreakCountDisplay