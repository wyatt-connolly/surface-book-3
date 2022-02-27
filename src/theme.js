import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    body1: {
      fontFamily: "sans-serif",
    },
    subtitle1: {
      fontFamily: "sans-serif",
    },
  },
});

export default theme;
