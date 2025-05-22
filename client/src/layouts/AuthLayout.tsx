import React from "react";
import AuthLeftSection from "../components/LoginFlow/AuthLeftSection/AuthLeftSection";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useResponsive } from "../utils/useResponsive";

function AuthLayout() {
  const isSmallScreen = useResponsive();
  return (
    <Grid container style={{ minHeight: isSmallScreen ? "200px" : "100vh" }}>
      <Grid
        item
        xs={12}
        md={6}
        style={{
          backgroundColor: "#1C1B20",
          display: "flex",
        }}
      >
        {!isSmallScreen ? (
          <AuthLeftSection />
        ) : (
          <AuthLeftSection isSmallScreen={isSmallScreen} />
        )}
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "2rem",
        }}
      >
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default AuthLayout;
