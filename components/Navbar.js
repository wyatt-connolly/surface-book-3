import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Popover from "@mui/material/Popover";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

const Hide = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));
const HideAppBar = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Hide>
        <AppBar
          position="static"
          sx={{ backgroundColor: "white", boxShadow: "none" }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, color: "black" }}
              >
                <MenuIcon />
              </IconButton>
              <SearchIcon sx={{ color: "black" }} />
            </Box>
            <Image
              style={{ flexGrow: 1 }}
              src="/microsoft.png"
              width={108}
              height={23}
            />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ShoppingCartOutlinedIcon sx={{ color: "black" }} />
              <Avatar
                sx={{ width: 36, height: 36, ml: 2, backgroundColor: "white" }}
              >
                <PersonAddAltOutlinedIcon sx={{ color: "black" }} />
              </Avatar>
            </Box>
          </Toolbar>
        </AppBar>
      </Hide>
      <Hide>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Surface for Business</Typography>
          </AccordionSummary>
        </Accordion>
        <Divider />
      </Hide>
      <HideAppBar>
        <AppBar
          position="static"
          sx={{ backgroundColor: "white", boxShadow: "none" }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <Image
                  style={{ flexGrow: 1 }}
                  src="/microsoft.png"
                  width={108}
                  height={23}
                />
              </IconButton>
              <Divider sx={{ mx: 2 }} orientation="vertical" flexItem />
              <Typography variant="h6" color="rgba(0, 0, 0, 0.87)">
                Surface for Business
              </Typography>

              <Button sx={{ ml: 2 }} variant="contained">
                WHERE TO BUY
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "150px",
              }}
            >
              <SearchIcon sx={{ color: "black", mr: 1 }} />
              <ShoppingCartOutlinedIcon sx={{ color: "black" }} />
              <Avatar sx={{ width: 36, height: 36, backgroundColor: "white" }}>
                <PersonAddAltOutlinedIcon sx={{ color: "black" }} />
              </Avatar>
            </Box>
          </Toolbar>
        </AppBar>
      </HideAppBar>
    </Box>
  );
}
