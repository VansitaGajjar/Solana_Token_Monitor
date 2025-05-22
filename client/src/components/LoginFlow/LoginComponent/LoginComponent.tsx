import {
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Button,
  Box,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";
import Style from "./LoginComponent.module.css";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Link } from "react-router-dom";
import { useResponsive } from "../../../utils/useResponsive";

interface userLoginData {
  email: string;
  password: string;
}

function LoginComponent() {
  const isSmallScreen = useResponsive();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [userLoginData, setUserLoginData] = useState<userLoginData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  const isFormValid = () => {
    return (
      userLoginData.email &&
      userLoginData.password &&
      !Object.values(errors).some((error) => error)
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(userLoginData);
  };

  const handleCheckboxChange = (e: React.FormEvent) => {
    const { checked } = e.target as HTMLInputElement;
    setRememberMe(checked);
  };

  const handleChange = (e: React.FormEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setUserLoginData({ ...userLoginData, [name]: value });
    const newErrors = { ...errors };

    if (name === "email") {
      newErrors.email = /\S+@\S+\.\S+/.test(value)
        ? ""
        : "Invalid email format";
    }

    if (name === "password") {
      newErrors.password =
        value.length >= 8 ? "" : "Password must be at least 8 characters";
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
        Login
      </Typography>

      {
        <Typography
          variant={isSmallScreen ? "inherit" : "h6"}
          component="h6"
          className={Style.createAccountTxt}
          gutterBottom
        >
          Welcome lack! Please login to your account.
        </Typography>
      }

      <Typography className={Style.inputFieldLabel}>E-mail</Typography>
      <TextField
        className={Style.inputTextFieldBox}
        name="email"
        placeholder="E-mail"
        variant="outlined"
        type="email"
        fullWidth
        margin="normal"
        value={userLoginData.email}
        onChange={handleChange}
        required
        error={!!errors.email}
        helperText={errors.email}
      />

      <Typography className={Style.inputFieldLabel}>Password</Typography>
      <TextField
        className={Style.inputTextFieldBox}
        name="password"
        placeholder="Password"
        variant="outlined"
        type={showPassword ? "text" : "password"}
        fullWidth
        margin="normal"
        value={userLoginData.password}
        onChange={handleChange}
        required
        error={!!errors.password}
        helperText={errors.password}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  setShowPassword((prevShowPassword) => !prevShowPassword);
                }}
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOutlinedIcon />
                ) : (
                  <VisibilityOffOutlinedIcon />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Box className={Style.remeberForgotBox}>
        <FormControlLabel
          control={
            <Checkbox
              checked={rememberMe}
              onChange={handleCheckboxChange}
              sx={{
                "&.Mui-checked": {
                  color: "#1c1b20",
                },
              }}
            />
          }
          sx={{
            "& .MuiTypography-root": {
              color: "#373854",
              opacity: "50%",
              fontSize: isSmallScreen ? "14px" : "16px",
            },
          }}
          label="Remember Me"
        />
        <Typography sx={{ fontSize: isSmallScreen ? "14px" : "16px" }}>
          <Link to="/forgotPassword" className={Style.forgotPassowordTxt}>
            Forgot Passoword?
          </Link>
        </Typography>
      </Box>

      <Box className={Style.buttonBox}>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          className={Style.signupBtn}
          disabled={!isFormValid()}
        >
          LogIn
        </Button>
      </Box>

      <Box className={Style.alreadyAccountBox}>
        <Box className={Style.dontAccountTxt}>Doesn’t have an account yet?</Box>
        <Link to={"/signup"} className={Style.loginTxt}>
          Sign Up
        </Link>
      </Box>
    </form>
  );
}

export default LoginComponent;
