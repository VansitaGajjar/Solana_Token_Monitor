import React from "react";
import AuthLeftSection from "../components/LoginFlow/AuthLeftSection/AuthLeftSection";
import SignupComponent from "../components/LoginFlow/SignupComponent/SignupComponent";
import { Grid } from "@mui/material";

function Signup() {
  return (
    <Grid container style={{ minHeight: "100vh" }}>
      <Grid
        item
        xs={12}
        md={6}
        style={{
          backgroundColor: "#1C1B20",
          display: "flex",
        }}
      >
        <AuthLeftSection />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <SignupComponent />
      </Grid>
    </Grid>
  );
}

export default Signup;
