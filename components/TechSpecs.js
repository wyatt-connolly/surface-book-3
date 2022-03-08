import React from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { styled } from "@mui/material/styles";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import Image from "next/image";

import BasicTable from "./Table";

const ResponsiveCard = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "80%",
    backgroundColor: "white",
  },
  [theme.breakpoints.up("sm")]: {
    width: "40%",
  },
}));

export default function TechSpecs({ expanded, setExpanded, handleChange }) {
  return (
    <>
      <Accordion
        id="tech-specs"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          sx={{ display: "flex", flexDirection: "row-reverse" }}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Button
            sx={{ my: 6 }}
            startIcon={
              expanded === "panel1" ? (
                <RemoveCircleOutlineOutlinedIcon sx={{ color: "#0067b8;" }} />
              ) : (
                <AddCircleOutlineIcon sx={{ color: "#0067b8;" }} />
              )
            }
          >
            VIEW TECH SPECS
          </Button>
        </AccordionSummary>
        <AccordionDetails>
          <BasicTable />
        </AccordionDetails>
      </Accordion>

      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          More from the Book you know
        </Typography>
        <Typography variant="body1" paragraph gutterBottom>
          Tackle tough tasks anywhere you want to work. Surface Book 3 has more
          speed than before and faster memory with up to 2TB of blazing-fast
          storage.
        </Typography>

        <Card
          sx={{
            mt: 3,
            mb: 6,
          }}
        >
          <Stack
            justifyContent="center"
            alignItems={{ xs: "center", sm: "flex-end" }}
          >
            <CardMedia
              sx={{ minHeight: "400px" }}
              component="img"
              image="/surfacebook2.bmp"
              alt="surface book"
              objectFit="cover"
            />
            <ResponsiveCard sx={{ position: "absolute" }}>
              <CardContent>
                <Typography fontWeight="bold" variant="body1" gutterBottom>
                  Quad-core 10th Gen Intel® Core™ i7 Processor
                </Typography>
                <Typography fontWeight="bold" variant="body1" gutterBottom>
                  NVIDIA Quadro and GeForce GTX GPUs
                </Typography>
                <Typography fontWeight="bold" variant="body1" gutterBottom>
                  Up to 32GB RAM and 2TB storage
                </Typography>
                <Typography fontWeight="bold" variant="body1" gutterBottom>
                  Rich audio with Dolby Atmos® sound
                </Typography>
                <Typography fontWeight="bold" variant="body1" gutterBottom>
                  Enhanced dual far-field Studio Mics
                </Typography>
                <Typography fontWeight="bold" variant="body1">
                  Resume work fast and securely with Instant On
                </Typography>
              </CardContent>
            </ResponsiveCard>
          </Stack>
        </Card>
      </Box>
    </>
  );
}
