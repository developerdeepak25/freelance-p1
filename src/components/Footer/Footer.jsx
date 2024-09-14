import { Box, Typography } from "@mui/material";
import AppleIcon from "../../assets/footerIcons/AppleIcon";
import Facebook from "../../assets/footerIcons/facebook";
import InstagramIcon from "../../assets/footerIcons/InstagramIcon";
import LinkedInIcon from "../../assets/footerIcons/LinkedInIcon";
import TwitterIcon from "../../assets/footerIcons/TwitterIcon";
import Logo from "../../assets/navIcons/Logo";
import "./Footer.css";
import GooglePlayIcon from "../../assets/footerIcons/GooglePlayIcon";

const Footer = () => {
  return (
    <Box
      // sx={{
      //   [theme.breakpoints.up("lg")]: {
      //     display: "grid",
      //   },
      // }}
      className="footer"
    >
      <div className="footer-col1">
        <div className="social-links">
          <a href="#" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="#" aria-label="Facebook">
            <Facebook />
          </a>
          <a href="#" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href="#" aria-label="Twitter">
            <TwitterIcon />
          </a>
        </div>
        <div className="legal-links">
          <a href="#">Disclaimer</a> |<a href="#">Privacy Policy</a> |
          <a href="#">Terms of Use</a>
        </div>
      </div>
      <div className="footer-col2">
        <Logo height={60} />
      </div>
      <div className="footer-col3">
        <Box sx={{ display: "flex", gap: "28px" }} className="app-stores">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              // justifyContent: 'space-between',
              gap: "5px",
              background: "white",
              borderRadius: "10px",
              height: "42px",
              width: "124px",
              padding: "10px ",
            }}
            className="apple-app-store-badge"
          >
            <AppleIcon />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                // alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "8px",
                  color: "#000",
                  fontWeight: "600",
                }}
              >
                Download on the
              </Typography>
              <Typography
                sx={{ fontSize: "13px", fontWeight: "600", color: "#000" }}
              >
                AppStore
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              // justifyContent: 'space-between',
              gap: "5px",
              background: "white",
              borderRadius: "10px",
              height: "42px",
              width: "124px",
              padding: "10px 0px 10px 10px ",
            }}
            className="google-app-store-badge"
          >
            <GooglePlayIcon />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                // alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "8px",
                  color: "#000",
                  fontWeight: "600",
                }}
              >
                Get it on
              </Typography>
              <Typography
                sx={{ fontSize: "13px", fontWeight: "600", color: "#000" }}
              >
                Google play
              </Typography>
            </Box>
          </Box>
        </Box>
        <div className="copyright">
          © Copyrights 2024 Zevo360 Technologies Private Limited
        </div>
      </div>
    </Box>
  );
};

export default Footer;
