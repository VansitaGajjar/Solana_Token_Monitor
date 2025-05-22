import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import MyRoutes from "../src/components/Routes/Router";

import Signup from "./pages/Signup";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Lexend, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MyRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
