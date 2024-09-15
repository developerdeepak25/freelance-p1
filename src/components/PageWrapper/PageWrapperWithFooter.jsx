import { Box } from "@mui/material";
import Footer from "../Footer/Footer";
import "./PageWapper.css";

// No longer with footer havn't changes name because already in use
const PageWrapperWithFooter = ({ children }) => {
  return (
    <div className="page_wrapper bg_cover">
      <dix className="page_inner_wrapper">
        <div className="page_bg_overlay"></div>{" "}
        <Box sx={{ position: "relative" }}>{children}</Box>
        {/* <Footer /> */}
      </dix>
    </div>
  );
};

export default PageWrapperWithFooter;
