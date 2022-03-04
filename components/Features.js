import { Typography, Stack, Box, Container } from "@mui/material";
import React from "react";

export default function Features() {
  return (
    <Container maxWidth="md">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 5, md: 5 }}
        justifyContent="center"
        sx={{
          textAlign: "center",
          mt: 2,
          mb: { xs: 3, sm: 10 },
        }}
      >
        <Stack direction={{ xs: "column", md: "row" }}>
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
        </Stack>
        <Stack direction={{ xs: "column", md: "row" }}>
          <Typography variant="subtitle1" paragraph gutterBottom>
            Choose from NVIDIA®{" "}
            <Typography variant="h4" component="p">
              Quadro
            </Typography>{" "}
            RTX™ 3000 or GeForce® GTX graphics
          </Typography>
          <Typography variant="subtitle1" paragraph gutterBottom>
            Two sizes:
            <Typography variant="h4" component="p">
              13.5”/15”
            </Typography>
            detachable PixelSense™ Display
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
}
