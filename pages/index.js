import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Features from "../components/Features";
import { Divider } from "@mui/material";
import TechSpecs from "../components/TechSpecs";

export default function Index() {
  return (
    <>
      <Navbar />
      <Container maxWidth="sm" sx={{ bgcolor: "background.paper" }}>
        <Home />
        <Divider sx={{ width: 1 }} />
        <Features />
        <Divider sx={{ width: 1 }} />
        <TechSpecs />
      </Container>
    </>
  );
}
