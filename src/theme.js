import { createTheme, styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Media Queries
export const HideMobile = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));
export const HideDesktop = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
export const HeroText = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    position: "absolute",
    top: "calc(50%)",
  },
}));

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
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "none",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          borderRadius: "none",
          overflow: "visible",
          width: "auto",
        },
      },
    },
  },
});

export default theme;
