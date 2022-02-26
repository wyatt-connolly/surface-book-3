import React from "react";
import { Box, Card, CardContent, Button, Typography } from "@mui/material";
import Image from "next/image";

export default function Accessories() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Card>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Compare tech specs for all Surface computers
          </Typography>
          <Typography variant="body1" gutterBottom>
            See tech specs side-by-side. Compare processors, graphics cards,
            screen size, resolution, weight, RAM, and more.
          </Typography>
          <Button>COMPARE SURFACE COMPUTERS</Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Surface Accessories
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Most Surface accessories are universal, compatible across
            generations. The investment you make in accessories is designed to
            last.
          </Typography>
          <Button>WHERE TO BUY</Button>
          <Button>SEE MORE SURFACE ACCESSORIES</Button>
        </CardContent>
      </Card>
      <Image src="/surface-dock.webp" width={375} height={200} />
      <Card>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Accessories designed for Surface Book
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Turn your Surface Book 3 into a desktop PC with the next-gen ports
            of Surface Dock 2.⁷ Get precise on-screen movement with Surface
            Precision Mouse.⁷ Ink naturally with Surface Pen.⁷
          </Typography>
        </CardContent>
      </Card>
      <Image src="/surface-mouse.webp" width={375} height={200} />
      <Image src="/surface-pen.webp" width={375} height={200} />
    </Box>
  );
}
