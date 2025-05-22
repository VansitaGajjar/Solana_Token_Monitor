import { useTheme, useMediaQuery, Theme } from "@mui/material";

export const useResponsive = () => {
  const theme: Theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return isSmallScreen;
};
