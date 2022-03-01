import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Features from "../components/Features";
import { Divider } from "@mui/material";
import TechSpecs from "../components/TechSpecs";
import TechSpecs2 from "../components/TechSpecs2";
import Cards from "../components/Cards";
import DeviceCarousel from "../components/ImageCarousel/DeviceCarousel";
import Accessories from "../components/Accessories";
import Cards2 from "../components/Cards2";
import Insights from "../components/Insights";

export default function Index() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Navbar />
      <Home />
      <Divider sx={{ width: 1 }} />
      <Features />
      <Divider sx={{ width: 1 }} />
      <TechSpecs
        expanded={expanded}
        setExpanded={setExpanded}
        handleChange={handleChange}
      />
      <TechSpecs2 />
      <Divider sx={{ width: 1 }} />
      <Cards />
      <DeviceCarousel />
      <Accessories />
      <Cards2 />
      <Divider sx={{ width: 1 }} />
      <Insights />
    </>
  );
}
