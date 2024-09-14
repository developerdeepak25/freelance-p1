import { Box, Typography } from '@mui/material';

const HabitHeader = () => {
  return (
    <Box
      sx={{
        width: "744px",
        height: "418px",
        position: "relative",
        overflow: "hidden",
        borderRadius: "6px",
      }}
      className="header-image-section"
    >
      <img
        className="header-image"
        src="/public/images/HabitSectionHeaderImage.png"
        style={{height:'100%',width:'100%'}}
      />
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          background:
            "linear-gradient(360deg, #000000 -11.09%, rgba(0, 0, 0, 0) 60.76%)",
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            bottom: "20px",
            left: "15px",
            fontSize: "22px",
            fontWeight: "600",
          }}
        >
          Make your bed daily
        </Typography>
      </Box>
    </Box>
  );
}

export default HabitHeader