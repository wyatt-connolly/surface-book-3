import {
  Box,
  Typography,
  Button,
  ImageList,
  ImageListItem,
  Fade,
  Paper,
} from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Carousel from "react-material-ui-carousel";

export default function ImageCarousel1() {
  const items = [
    {
      image: "/surfacecarousel1.bmp",
      name: "Create, communicate, and code on the most powerful Surface laptop",
      description:
        "Type on the comfortable keyboard, gesture on the responsive trackpad, and engage in seamless virtual meetings in Microsoft Teams.",
    },
    {
      image: "/surfacecarousel2.bmp",
      name: "Show your work on a large, processor-powered tablet",
      description:
        "Surface Book 3 15” is one of the biggest tablets with the full power of a PC. Look great in video calls with 1080p HD video, and share your view with the 1080p HD rear-facing camera.",
    },
    {
      image: "/surfacecarousel3.bmp",
      name: "Sketch and share with a powerful portable studio",
      description:
        "Write, draw, and annotate at a comfortable angle. Your creations come to life on the brilliant PixelSense™ Display.",
    },
  ];
  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper elevation="0">
      <img width="100%" src={props.item.image} />
      <Typography variant="h6" gutterBottom>
        {props.item.name}
      </Typography>
      <Typography variant="body2">{props.item.description}</Typography>
    </Paper>
  );
}
