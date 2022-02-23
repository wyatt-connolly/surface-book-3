import { Typography, Box } from "@mui/material";
import React from "react";

export default function Features() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="subtitle1" paragraph gutterBottom>
        Up to <Typography variant="h4">i7</Typography> 10th Gen Intel Core
        Processor
      </Typography>
      <Typography variant="subtitle1" paragraph gutterBottom>
        Up to 2TB SSD and{" "}
        <Typography variant="h4" component="p">
          32GB
        </Typography>{" "}
        RAM
      </Typography>
      <Typography variant="subtitle1" paragraph gutterBottom>
        Choose from NVIDIA®{" "}
        <Typography variant="h4" component="p">
          Quadro
        </Typography>{" "}
        RTX™ 3000 or GeForce® GTX graphics
      </Typography>
      <Typography variant="subtitle1" paragraph gutterBottom>
        Two sizes:{" "}
        <Typography variant="h4" component="p">
          13.5”/15”
        </Typography>{" "}
        detachable PixelSense™ Display
      </Typography>
    </Box>
  );
}
