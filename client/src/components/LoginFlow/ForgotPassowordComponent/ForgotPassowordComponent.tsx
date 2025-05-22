import { TextField, Typography, Button, Box } from "@mui/material";
import React, { useState } from "react";
import Style from "./ForgotPassowordComponent.module.css";
import { useNavigate } from "react-router-dom";
import { useResponsive } from "../../../utils/useResponsive";

function ForgotPassowordComponent() {
  const isSmallScreen = useResponsive();
  const naviagte = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<string | undefined>("");

  const isFormValid = () => {
    return email;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
    naviagte("/otp", { replace: true });
  };

  const handleChange = (e: React.FormEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setEmail(value);
    let newErrors;
    if (name === "email") {
      newErrors = /\S+@\S+\.\S+/.test(value) ? "" : "Invalid email format";
    }

    setErrors(newErrors);
  };
  return (
    <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: 400 }}>
      <Typography
        variant={isSmallScreen ? "h5" : "h4"}
        component="h2"
        gutterBottom
        className={Style.signupBtnTxt}
      >
        Forgot Password
      </Typography>

      <Typography
        variant={isSmallScreen ? "inherit" : "h6"}
        component="h6"
        className={Style.createAccountTxt}
        gutterBottom
      >
        Enter your registered email address. we’ll send you a code to reset your
        password.
      </Typography>

      <Typography className={Style.inputFieldLabel}>E-mail</Typography>
      <TextField
        className={Style.inputTextFieldBox}
        name="email"
        placeholder="E-mail"
        variant="outlined"
        type="email"
        fullWidth
        margin="normal"
        value={email}
        onChange={handleChange}
        required
        error={!!errors}
        helperText={errors}
      />

      <Box className={Style.buttonBox}>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          className={Style.signupBtn}
          disabled={!isFormValid()}
        >
          Send Otp
        </Button>
      </Box>
    </form>
  );
}

export default ForgotPassowordComponent;
