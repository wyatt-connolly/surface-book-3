import React from "react";
import {
  Box,
  Paper,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import Image from "next/image";

export default function Cards() {
  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Card>
          <Image width={"375px"} height={"250px"} src="/warranty.webp" />
          <CardContent>
            <Typography
              variant="h6"
              fontWeight="bold"
              component="h2"
              gutterBottom
            >
              Surface Book 3 warranty and protection plans
            </Typography>
            <Typography variant="body1" gutterBottom>
              Microsoft Protection Plans help you maximize your investment in
              Surface so you can hit the ground running and stay productive when
              issues arise.
            </Typography>
            <Button>SEE SURFACE WARRANTY OPTIONS</Button>
          </CardContent>
        </Card>
        <Card>
          <Image width={"375px"} height={"250px"} src="/wave.webp" />
          <CardContent>
            <Typography
              variant="h6"
              fontWeight="bold"
              component="h2"
              gutterBottom
            >
              Which Windows? You decide
            </Typography>
            <Typography variant="body1" gutterBottom>
              Whether you're still invested in Windows 10 or are ready to
              introduce Windows 11 to your workforce, you have choices. Both
              options are available for Surface Book 3.
            </Typography>
            <Button>MEET WINDOWS 11</Button>
          </CardContent>
        </Card>
        <Card>
          <Image
            width={"375px"}
            height={"250px"}
            src="/surface-laptop-studio.webp"
          />
          <CardContent>
            <Typography
              variant="h6"
              fontWeight="bold"
              component="h2"
              gutterBottom
            >
              Surface Laptop Studio: The most powerful Surface
            </Typography>
            <Typography variant="body1" gutterBottom>
              Handle heavy workflows with quad-core powered 11th Gen Intel®
              Core™ H Series processors, enterprise-grade NVIDIA® RTX™ A2000
              laptop GPUs, and Thunderbolt™ ports.
            </Typography>
            <Button>MEET SURFACE LAPTOP STUDIO</Button>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
