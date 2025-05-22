import { Grid } from "@mui/material";
import React from "react";
import AuthLeftSection from "../components/LoginFlow/AuthLeftSection/AuthLeftSection";
import PasswordResetComponent from "../components/LoginFlow/PasswordResetComponent/PasswordResetComponent";

function PasswordReset() {
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
        <PasswordResetComponent />
      </Grid>
    </Grid>
  );
}

export default PasswordReset;
