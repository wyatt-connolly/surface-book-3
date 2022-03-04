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
import ImageCarousel1 from "./ImageCarousel/ImageCarousel-1";
import ImageCarousel2 from "./ImageCarousel/ImageTabs";
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
            sx={{ my: 5 }}
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
        <Typography sx={{ mx: 4 }} variant="h5" fontWeight="bold" gutterBottom>
          More from the Book you know
        </Typography>
        <Typography sx={{ mx: 3 }} variant="body1" paragraph gutterBottom>
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
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Built for performance
        </Typography>
        <Typography sx={{ mx: 3 }} variant="body1" paragraph gutterBottom>
          Our most powerful Surface laptop yet is a high-performance business
          laptop that helps you tackle complex tasks. Faster than ever, Surface
          Book 3 is optimized for productivity.
        </Typography>
        <Box sx={{ my: 8 }}>
          <Image
            src="/surfacebook3.bmp"
            width={375}
            height={209}
            layout="responsive"
          />
        </Box>
      </Box>
      <Box>
        <Typography variant="h5" fontWeight="bold">
          Faster than before
        </Typography>
        <Typography variant="body1" paragraph gutterBottom>
          Quad-core powered 10th Gen Intel® Core™ i7 processors help make
          Surface Book 3 a powerful detachable laptop.
        </Typography>
        <Typography variant="h5" fontWeight="bold">
          Performance for graphics-intensive tasks
        </Typography>
        <Typography variant="body1" paragraph gutterBottom>
          Speed through software like Autodesk® AutoCAD®, Dassault SOLIDWORKS™,
          and Adobe® Creative Cloud®,7 and code fast in Microsoft Visual Studio.
        </Typography>
        <Typography variant="h5" fontWeight="bold">
          Power your productivity all day
        </Typography>
        <Typography variant="body1" paragraph gutterBottom>
          Get up to 17.5 hours battery life and get back to work with improved
          standby that extends battery life for days.
        </Typography>
        <Typography variant="h5" fontWeight="bold">
          Get back to work quickly and securely
        </Typography>
        <Typography variant="body1" paragraph gutterBottom>
          Instant On brings your screen up fast, and Windows Hello logs you in
          with a glance. Open the lid and return to your task in an instant.
        </Typography>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            Versatility for the ways you work and create
          </Typography>
          <Typography variant="body1" paragraph gutterBottom>
            Unleash your creativity however inspiration strikes. Whether
            sketching ideas and handwriting notes, sharing your view with
            others, or writing code, this detachable laptop adapts to the
            endless ways you create and collaborate.
          </Typography>
          <ImageCarousel1 />
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Get your job done
          </Typography>
          <Typography variant="body1" paragraph gutterBottom>
            Leave your desk behind and keep the best graphics performance of any
            Surface laptop by your side. Create content, compile code, deploy
            data models, or realize 3D visualizations wherever you work best.
          </Typography>
          <Button>SEE APPS CERTIFIED FOR SURFACE BOOK 3</Button>
          <ImageCarousel2 />
        </Box>
      </Box>
    </>
  );
}
