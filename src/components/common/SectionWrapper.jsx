import { Box, Typography } from "@mui/material";
import "./SectionWrapper.css";


// insted of showviewall ther should be a action like link or onclick if they are not passed veiwall link will be hidden

//TODO rename this componetn   
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
