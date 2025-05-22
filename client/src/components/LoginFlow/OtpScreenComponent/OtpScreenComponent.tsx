import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import Style from "./OtpScreenComponent.module.css";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { useResponsive } from "../../../utils/useResponsive";

function OtpScreenComponent() {
  const isSmallScreen = useResponsive();
  const naviagte = useNavigate();

  const [otp, setOtp] = useState<string>("");
  const handleChange = (otp: string) => setOtp(otp);
  const isOtpValid = () => otp.length === 5 && /^\d+$/.test(otp);

  const handleSubmit = () => {
    console.log(otp);
    naviagte("/password-reset", { replace: true });
  };
  return (
    <Box>
      <Typography
        variant={isSmallScreen ? "h5" : "h4"}
        component="h2"
        gutterBottom
        className={Style.signupBtnTxt}
      >
        Enter OTP
      </Typography>

      <Typography
        variant={isSmallScreen ? "inherit" : "h6"}
        component="h6"
        className={Style.createAccountTxt}
        gutterBottom
      >
        We have share a code of your registered email <br /> address
        robertallen@example.com
      </Typography>

      <OTPInput
        value={otp}
        onChange={handleChange}
        numInputs={5}
        renderInput={(props) => <input {...props} />}
        shouldAutoFocus={true}
        inputStyle={{
          border: "1px solid #373854",
          borderRadius: "8px",
          width: isSmallScreen ? "45px" : "65px",
          height: isSmallScreen ? "45px" : "65px",
          fontSize: isSmallScreen ? "16px" : "28px",
          color: "#373854",
          fontWeight: "600",
          caretColor: "#373854",
        }}
        containerStyle={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          margin: "15px 0px",
        }}
      />

      <Box className={Style.buttonBox}>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          className={Style.otpBtn}
          disabled={!isOtpValid()}
          onClick={handleSubmit}
        >
          Verify
        </Button>
      </Box>
    </Box>
  );
}

export default OtpScreenComponent;
