import React from "react";
import { Box, Paper } from "@mui/material";
import Image from "next/image";

export default function Cards() {
  return (
    <Box>
      <Paper>
        <Image width={"375px"} height={"250px"} src="/warranty.webp" />
      </Paper>
    </Box>
  );
}
