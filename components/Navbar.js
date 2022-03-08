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
import Link from "../src/Link";

import Image from "next/image";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { HideDesktop, HideMobile } from "../src/theme";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <HideMobile>
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

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Surface for Business</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#e6e6e6" }}>
            <Link
              variant="body1"
              color="inherit"
              href="#features"
              underline="none"
            >
              Features
            </Link>
          </AccordionDetails>
          <AccordionDetails sx={{ backgroundColor: "#e6e6e6" }}>
            <Link
              variant="body1"
              color="inherit"
              href="#tech-specs"
              underline="none"
            >
              Tech Specs
            </Link>
          </AccordionDetails>
          <AccordionDetails sx={{ backgroundColor: "#0067b8" }}>
            <Link
              variant="body1"
              color="#fff"
              href="https://www.microsoft.com/en-us/surface/business/where-to-buy-microsoft-surface"
              underline="none"
            >
              WHERE TO BUY
            </Link>
          </AccordionDetails>
        </Accordion>
        <Divider />
      </HideMobile>
      <HideDesktop>
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

              <Button
                href="https://www.microsoft.com/en-us/surface/business/where-to-buy-microsoft-surface"
                sx={{ ml: 2 }}
                variant="contained"
              >
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
      </HideDesktop>
    </Box>
  );
}
