import { Route, Routes, useLocation } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import LoginComponent from "../LoginFlow/LoginComponent/LoginComponent";
import SignupComponent from "../LoginFlow/SignupComponent/SignupComponent";
import ForgotPassowordComponent from "../LoginFlow/ForgotPassowordComponent/ForgotPassowordComponent";
import OtpScreenComponent from "../LoginFlow/OtpScreenComponent/OtpScreenComponent";
import PasswordResetComponent from "../LoginFlow/PasswordResetComponent/PasswordResetComponent";
import { Box } from "@mui/material";
import AdminSidebar from "../../layouts/AdminSidebar";
import TokenList from "../../pages/AdminPages/TokenList";

function Router() {
  const location = useLocation();

  const isAuthRoute =
    location.pathname === "/" ||
    location.pathname === "/signup" ||
    location.pathname === "/forgotPassword" ||
    location.pathname === "/otp" ||
    location.pathname === "/password-reset";

  return (
    <Box>
      {!isAuthRoute && <AdminSidebar />}
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<LoginComponent />} />
          <Route path="/signup" element={<SignupComponent />} />
          <Route
            path="/forgotPassword"
            element={<ForgotPassowordComponent />}
          />
          <Route path="/otp" element={<OtpScreenComponent />} />
          <Route path="/password-reset" element={<PasswordResetComponent />} />
        </Route>

        <Route path="/admin/token-list" element={<TokenList />} />
      </Routes>
    </Box>
  );
}

export default Router;
