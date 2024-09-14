import { Box, Typography } from "@mui/material";
import "./SectionWrapper.css";

const SectionWrapper = ({ showViewAll = true, heading, children }) => {
  return (
    <Box className="section-wrapper">
      {/* <div></div> */}
      <Box className="section-header">
        {heading && <p className="section-heading">{heading}</p>}
        {showViewAll && <div className="view_all">View all</div>}
      </Box>
      {children}
    </Box>
  );
};

export default SectionWrapper;
