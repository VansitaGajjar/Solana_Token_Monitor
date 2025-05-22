import { Box, Button, Typography } from "@mui/material";
import SuccessAnimation from "../../../assets/LoginFlowIcons/Succeess Animation.svg";
import Style from "./PasswordResetComponent.module.css";
import { useNavigate } from "react-router-dom";
import { useResponsive } from "../../../utils/useResponsive";

function PasswordResetComponent() {
  const isSmallScreen = useResponsive();
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("SucessFully password reset");
    navigate("/", { replace: true });
  };
  return (
    <Box className={Style.passwordResetMainBox}>
      <img src={SuccessAnimation} alt="SuccessAnimation" />

      <Typography
        variant={isSmallScreen ? "h5" : "h4"}
        component="h2"
        gutterBottom
        className={Style.signupBtnTxt}
      >
        Password Reset
      </Typography>

      <Typography
        variant={isSmallScreen ? "inherit" : "h6"}
        component="h6"
        className={Style.createAccountTxt}
        gutterBottom
      >
        Your password has been reset successfully.
      </Typography>

      <Button
        type="submit"
        variant="contained"
        fullWidth
        className={Style.otpBtn}
        onClick={handleSubmit}
      >
        Log in
      </Button>
    </Box>
  );
}

export default PasswordResetComponent;
