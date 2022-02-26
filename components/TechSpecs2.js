import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import ImageCarousel2 from "./ImageCarousel/ImageCarousel-2";

export default function TechSpecs2() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        A commitment to innovation, from one generation to the next
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Starting at $1,699.99
      </Typography>
      <Typography variant="body2" gutterBottom>
        A cutting-edge balance of performance, versatility, and mobility sets
        Surface Book 3 apart from the rest. Contact a Microsoft authorized
        reseller for pricing. Resellers will also help you deploy and manage
        Surface for your business.
      </Typography>
      <Button>WHERE TO BUY</Button>
      <Image width={"375px"} height={"250px"} src="/surface-identifiers.webp" />
      <Box sx={{ textAlign: "left" }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          1. Dynamic Fulcrum Hinge
        </Typography>
        <Typography variant="body2" gutterBottom>
          Detach, flip, and lower the screen to work on a graphics-intensive
          portable studio.
        </Typography>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          2. Dual far-field Studio Mics
        </Typography>
        <Typography variant="body2" gutterBottom>
          Be heard loud and clear in virtual meetings or using voice dictation
          in Office apps7 with enhanced dual far-field Studio Mics.
        </Typography>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          3. All the connections you need
        </Typography>
        <Typography variant="body2" gutterBottom>
          Stay connected with USB-C® and USB-A ports, and a full-size SD card.
          Add Surface Dock 27 for a single connector to charge devices, transfer
          files, and display video on external monitors.
        </Typography>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          4. Full-size keyboard
        </Typography>
        <Typography variant="body2" gutterBottom>
          Type and gesture comfortably and confidently with a full keyboard
          experience and the precise glass trackpad.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Surface for Business unlocks more value
        </Typography>
        <Typography variant="body1" gutterBottom>
          Surface customers save time and money with streamlined deployment,
          modern device management, and built-in, cloud-powered security.
          Empower people, data, and systems with connected experiences from
          Surface and Microsoft 365.
        </Typography>
        <ImageCarousel2 />
      </Box>
    </Box>
  );
}
