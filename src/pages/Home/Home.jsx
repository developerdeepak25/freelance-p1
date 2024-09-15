import { Box } from "@mui/material";
import "./Home.css";
import InsightSecttion from "../../components/InsightsSection/InsightSecttion";
import Footer from "../../components/Footer/Footer";
import PageWrapperWithFooter from "../../components/PageWrapper/PageWrapperWithFooter";
const Home = () => {
  return (
    <>
      {/* <div className="home page_wrapper bg_cover">
        <div className="page_inner_wrapper">
          <div className="page_bg_overlay"></div>{" "}
         
          <Box sx={{ position: "relative" }}>
            <InsightSecttion />
          </Box>
          <Footer />
        </div>
      </div> */}
      <PageWrapperWithFooter>
        <InsightSecttion />
      </PageWrapperWithFooter>
    </>
  );
};

export default Home;
