import React from "react";
import {
  Box,
  Paper,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
} from "@mui/material";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";

export default function DeviceCarousel() {
  const items = [
    {
      name: "Designed for the modern workplace",
      description:
        "Find remote work solutions for your employees wherever they work. Stay secure and get it all done with Surface devices.",
      button: "WHERE TO BUY",
      button2: "COMPARE DEVICES",
    },
    {
      image: "/surface-pro-8.webp",
      altname: "Surface Pro 8",
      subtitle: "Starting at $1,099.99",
      description:
        "The most powerful Pro, delivering unprecedented levels of performance.",
      listitem1: `13" display`,
      listitem2: "11th Gen Intel® Core™ Processor",
      listitem3: "Optional LTE Advanced",
      button: "MEET SURFACE PRO 8",
    },
    {
      image: "/surface-go-3.webp",
      altname: "Surface Go 3",
      subtitle: "Starting at $449.99",
      description:
        "Compact, 2-in-1 tablet-to-laptop flexibility for your frontline.",
      listitem1: `10.5" display`,
      listitem2: "Intel® Core™ i3 Processor",
      listitem3: "Optional LTE Advanced",
      button: "MEET SURFACE GO 3",
    },
    {
      image: "/surface-pro-7+.webp",
      altname: "Surface Pro 7+",
      subtitle: "Starting at $899.99",
      description:
        "The classic Pro, with high-speed performance and compatible with accessories you rely on.",
      listitem1: `12.3" display`,
      listitem2: "11th Gen Intel® Core™ processors",
      listitem3: "Optional LTE Advanced",
      button: "MEET SURFACE PRO 7+",
    },
    {
      image: "/surface-pro-x.webp",
      altname: "Surface Pro X",
      subtitle: "Starting at $999.99",
      description:
        "The totally mobile Pro, optimized to deliver fast performance.",
      listitem1: `13" display`,
      listitem2: "Up to Microsoft SQ® 2 Processor™ processors",
      listitem3: "Optional Gigabit-speed LTE Advanced Pro",
      button: "MEET SURFACE PRO X",
    },
    {
      image: "/surface-laptop-4.webp",
      altname: "Surface Pro 4",
      subtitle: "Starting at $1099.99",
      description: "Do it all with speed, performance, and sleek design.",
      listitem1: `Available in 13.5" and 15" sizes`,
      listitem2:
        "Choice of 11th Gen Intel® Core™ or AMD Ryzen™ Microsoft Surface Edition processors",
      button: "MEET SURFACE LAPTOP 4",
    },
    {
      image: "/surface-laptop-studio-alt.webp",
      altname: "Surface Laptop Studio",
      subtitle: "Starting at $1699.99",
      description:
        "The most powerful Surface Laptop, with modes that adapt to you.",
      listitem1: `14.3" display`,
      listitem2: "Up to 11th Gen Intel® Core™ H Series Processor",
      listitem3: "Up to NVIDIA® RTX™ A2000 laptop GPU",
      button: "MEET SURFACE LAPTOP STUDIO",
    },
    {
      image: "/surface-laptop-go.webp",
      altname: "Surface Laptop Go",
      subtitle: "Starting at $649.99",
      description:
        "The lightest Surface Laptop powers your essential everyday experiences.",
      listitem1: `12.4" display`,
      listitem2: "10th Gen Intel® Core™ i5 Processor",
      button: "MEET SURFACE LAPTOP GO",
    },
    {
      image: "/surface-duo-2.webp",
      altname: "Surface Duo 2",
      subtitle: "Starting at $1549.99",
      description:
        "Two touchscreens unfold to one expansive view for dual-screen apps and phone calls.",
      listitem1: `Two high-resolution 5.8" displays`,
      listitem2: "5G connectivity",
      listitem3: " ",
      button: "MEET SURFACE DUO 2",
    },
    {
      image: "/surface-studio-2.webp",
      altname: "Surface Studio 2",
      subtitle: "Starting at $3,499.99",
      description: "Our all-in-one-powerhouuse desktop computer.",
      listitem1: `28" display`,
      listitem2: "7th Generation Intel® Core™ i7 Processor",
      listitem3: "Up to NVIDIA® GeForce® GTX 1070 8GB GDDR5 memory",
      button: "MEET SURFACE STUDIO 2",
    },
    {
      image: "/surface-hub-2s.webp",
      altname: "Surface Hub 2s",
      description:
        "An all-in-one digital whiteboard, meetings platform, and collaborative computing device.",
      listitem1: `50” display for smaller spaces`,
      listitem2: `85" display for larger rooms`,
      button: "MEET SURFACE HUB 2S",
    },
    {
      image: "/surface-headphones-2+.webp",
      altname: "Surface Headphones 2+",
      subtitle: "Starting at $299.99",
      description:
        "Stay connected and focused with outstanding audio quality and crystal clear mics.",
      listitem1: "Microsoft Teams-certified",
      listitem2: "13 levels of active noise cancellation",
      button: "MEET SURFACE HEADPHONES 2+",
    },
  ];
  return (
    <Carousel autoPlay={false} IndicatorIcon="" navButtonsAlwaysVisible={true}>
      {items.map((item, i) => {
        const slides =
          i === 0 ? (
            <Item key={i} item={item} />
          ) : (
            <AltItem key={i} item={item} />
          );
        return slides;
      })}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {props.item.name}
        </Typography>
        <Typography variant="body1">{props.item.description}</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Button>{props.item.button}</Button>
          <Button>{props.item.button2}</Button>
        </Box>
      </CardContent>
    </Card>
  );
}

function AltItem(props) {
  return (
    <Card>
      <CardContent>
        <img src={props.item.image} width={"375px"} height={"250px"} />
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {props.item.altname}
        </Typography>
        <List>
          <ListItem>{props.item.listitem1}</ListItem>
          <ListItem>{props.item.listitem2}</ListItem>
          <ListItem>{props.item.listitem3}</ListItem>
        </List>
        <Button>{props.item.button}</Button>
      </CardContent>
    </Card>
  );
}
