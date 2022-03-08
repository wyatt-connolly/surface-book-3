import { Typography, Stack, Box, Container } from "@mui/material";
import React from "react";

export default function Features() {
  return (
    <Container maxWidth="md">
      <Stack
        id="features"
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 4 }}
        justifyContent="center"
        sx={{
          textAlign: "center",
          mt: 2,
          mb: 2,
        }}
      >
        <Stack direction={{ xs: "column", md: "row" }}>
          <Typography variant="subtitle1" paragraph gutterBottom>
            Up to{" "}
            <Typography
              variant="h4"
              component="paragraph"
              sx={{ display: "block" }}
            >
              i7
            </Typography>{" "}
            10th Gen Intel Core Processor
          </Typography>
          <Typography variant="subtitle1" paragraph gutterBottom>
            Up to 2TB SSD and{" "}
            <Typography
              variant="h4"
              component="paragraph"
              sx={{ display: "block" }}
            >
              32GB
            </Typography>{" "}
            RAM
          </Typography>
        </Stack>
        <Stack direction={{ xs: "column", md: "row" }}>
          <Typography variant="subtitle1" paragraph gutterBottom>
            Choose from NVIDIA®{" "}
            <Typography
              variant="h4"
              component="paragraph"
              sx={{ display: "block" }}
            >
              Quadro
            </Typography>{" "}
            RTX™ 3000 or GeForce® GTX graphics
          </Typography>
          <Typography variant="subtitle1" paragraph gutterBottom>
            Two sizes:{" "}
            <Typography
              variant="h4"
              component="paragraph"
              sx={{ display: "block" }}
            >
              13.5”/15”
            </Typography>{" "}
            detachable PixelSense™ Display
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
}
