import React from "react";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Image src="/surfacebook.bmp" width={375} height={200} />
      <Box>
        <Typography
          variant="display"
          component="h1"
          fontWeight="bold"
          gutterBottom
        >
          Surface Book 3 for Business
        </Typography>
        <Typography variant="body1" paragraph gutterBottom>
          Performance meets versatility in our most powerful Surface laptop yet.
          Speed, graphics, and long battery life pair with the flexibility of a
          robust laptop, processor-powered tablet, and portable studio.
        </Typography>
        <Button variant="text">See it in action</Button>
      </Box>
    </Box>
  );
}
