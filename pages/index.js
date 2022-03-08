import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Features from "../components/Features";
import { Divider } from "@mui/material";
import TechSpecs from "../components/TechSpecs";
import { Container } from "@mui/material";
import BuiltForPerformance from "../components/BuiltForPerformance";

export default function Index() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Navbar />
      <Home />
      <Container maxWidth="lg">
        <Divider sx={{ width: 1 }} />
        <Features />
        <Divider sx={{ width: 1 }} />
        <TechSpecs
          expanded={expanded}
          setExpanded={setExpanded}
          handleChange={handleChange}
        />
        <Divider sx={{ width: 1 }} />
        <BuiltForPerformance />
      </Container>
    </>
  );
}
