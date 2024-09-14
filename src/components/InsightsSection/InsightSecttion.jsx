import { Box } from "@mui/material";
import SectionWrapper from "../common/SectionWrapper";
import InsightCard from "./InsightCard";

const InsightSecttion = () => {
  return (
    <SectionWrapper heading={"Insights"} hasViewAll={true}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          // marginBottom: "20px",
        }}
      >
        <InsightCard />
        <InsightCard />
        <InsightCard />
        <InsightCard />
        <InsightCard />
      </Box>
    </SectionWrapper>
  );
};

export default InsightSecttion;
