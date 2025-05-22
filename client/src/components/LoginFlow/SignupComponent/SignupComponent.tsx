import {
  Avatar,
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import Style from "./SignUpComponent.module.css";
import Lock from "../../../assets/LoginFlowIcons/Lock.svg";
import Email from "../../../assets/LoginFlowIcons/sms.svg";
import User from "../../../assets/LoginFlowIcons/User.svg";
import { Link } from "react-router-dom";
import { useResponsive } from "../../../utils/useResponsive";

interface userSignupData {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function SignupComponent() {
  const isSmallScreen = useResponsive();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setConfirmShowPassword] =
    useState<boolean>(false);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [userSignupData, setUserSignupData] = useState<userSignupData>({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<{
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }>({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const isFormValid = () => {
    return (
      userSignupData.userName &&
      userSignupData.email &&
      userSignupData.password &&
      userSignupData.confirmPassword &&
      !Object.values(errors).some((error) => error)
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(userSignupData);
  };

  const handleChange = (e: React.FormEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setUserSignupData({ ...userSignupData, [name]: value });
    const newErrors = { ...errors };

    if (name === "userName") {
      newErrors.userName = value ? "" : "Username is required";
    }

    if (name === "email") {
      newErrors.email = /\S+@\S+\.\S+/.test(value)
        ? ""
        : "Invalid email format";
    }

    if (name === "password") {
      newErrors.password =
        value.length >= 8 ? "" : "Password must be at least 8 characters";
    }

    if (name === "confirmPassword") {
      newErrors.confirmPassword =
        userSignupData.password === value ? "" : "Passwords do not match";
    }

    setErrors(newErrors);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: 400 }}>
      <Typography
        variant={isSmallScreen ? "h5" : "h4"}
        component="h2"
        gutterBottom
        className={Style.signupBtnTxt}
      >
        Sign Up
      </Typography>

      {
        <Typography
          variant={isSmallScreen ? "inherit" : "h6"}
          component="h6"
          className={Style.createAccountTxt}
          gutterBottom
        >
          Create a new account by filling in info below.
        </Typography>
      }

      <Box className={Style.profileMainBox}>
        <Box>
          <Avatar
            src={avatar || ""}
            alt="User Avatar"
            sx={{
              width: isSmallScreen ? 50 : 60,
              height: isSmallScreen ? 50 : 60,
              cursor: "pointer",
            }}
            onClick={() => document.getElementById("avatar-upload")?.click()}
          />

          <TextField
            type="file"
            onChange={handleImageUpload}
            style={{ display: "none" }}
            id="avatar-upload"
          />
        </Box>

        <Typography className={Style.profileTxt}>Profile Picture</Typography>
      </Box>

      <Typography className={Style.inputFieldLabel}>Username</Typography>
      <TextField
        className={Style.inputTextFieldBox}
        name="userName"
        placeholder="username"
        variant="outlined"
        type="text"
        fullWidth
        margin="normal"
        value={userSignupData.userName}
        onChange={handleChange}
        required
        error={!!errors.userName}
        helperText={errors.userName}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={User} alt="user" />
            </InputAdornment>
          ),
        }}
      />

      <Typography className={Style.inputFieldLabel}>E-mail</Typography>
      <TextField
        className={Style.inputTextFieldBox}
        name="email"
        placeholder="E-mail"
        variant="outlined"
        type="email"
        fullWidth
        margin="normal"
        value={userSignupData.email}
        onChange={handleChange}
        required
        error={!!errors.email}
        helperText={errors.email}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={Email} alt="email" />
            </InputAdornment>
          ),
        }}
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
        value={userSignupData.password}
        onChange={handleChange}
        required
        error={!!errors.password}
        helperText={errors.password}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={Lock} alt="lock" style={{ marginRight: "10px" }} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  setShowPassword((prevShowPassword) => !prevShowPassword);
                }}
                edge="end"
              >
                {showPassword ? (
                  <RemoveRedEyeOutlinedIcon />
                ) : (
                  <VisibilityOffOutlinedIcon />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Typography className={Style.inputFieldLabel}>
        Confirm Password
      </Typography>
      <TextField
        className={Style.inputTextFieldBox}
        name="confirmPassword"
        placeholder="Confirm Password"
        variant="outlined"
        type={showConfirmPassword ? "text" : "password"}
        fullWidth
        margin="normal"
        value={userSignupData.confirmPassword}
        onChange={handleChange}
        required
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={Lock} alt="lock" style={{ marginRight: "10px" }} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  setConfirmShowPassword(
                    (prevShowPassword) => !prevShowPassword
                  );
                }}
                edge="end"
              >
                {showConfirmPassword ? (
                  <RemoveRedEyeOutlinedIcon />
                ) : (
                  <VisibilityOffOutlinedIcon />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Box className={Style.buttonBox}>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          className={Style.signupBtn}
          disabled={!isFormValid()}
        >
          Sign Up
        </Button>
        <Button
          variant="contained"
          fullWidth
          className={Style.backBtn}
          style={{ marginTop: "1rem" }}
        >
          Back
        </Button>
      </Box>

      <Box className={Style.alreadyAccountBox}>
        <Box className={Style.dontAccountTxt}>Already have an account?</Box>
        <Link to={"/"} className={Style.loginTxt}>
          Log In
        </Link>
      </Box>
    </form>
  );
}

export default SignupComponent;
