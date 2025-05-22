import { Box, Typography } from "@mui/material";
import Style from "./AuthLeftSection.module.css";
import AppLogo from "../../../assets/app_main_logo.svg";

function AuthLeftSection({ isSmallScreen }: { isSmallScreen?: boolean }) {
  return (
    <Box className={Style.mainAuthBox}>
      <img
        src={AppLogo}
        style={{
          height: "auto",
          width: isSmallScreen ? "100px" : "200px",
        }}
      />
      {!isSmallScreen && (
        <>
          <Typography variant="h4" className={Style.empoweringTxt}>
            Empowering Your Solana <br /> Token Decisions
          </Typography>
          <Typography variant="h6" className={Style.monitorTxt}>
            Monitor, Analyze, and Trade Tokens Seamlessly on <br /> Your Terms
          </Typography>
          <Box className={Style.pinkBox}></Box>
          <Box className={Style.yellowBox}></Box>
        </>
      )}
    </Box>
  );
}

export default AuthLeftSection;
