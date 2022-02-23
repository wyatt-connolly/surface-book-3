import { Box, Typography } from "@mui/material";
import React from "react";

export default function ImageCarousel() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        Versatility for the ways you work and create
      </Typography>
      <Typography variant="body1" paragraph gutterBottom>
        Unleash your creativity however inspiration strikes. Whether sketching
        ideas and handwriting notes, sharing your view with others, or writing
        code, this detachable laptop adapts to the endless ways you create and
        collaborate.
      </Typography>
    </Box>
  );
}
