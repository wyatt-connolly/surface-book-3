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
import Image from "next/image";
import Carousel from "react-material-ui-carousel";

export default function ImageCarousel2() {
  const items = [
    {
      image: "/remote-work.webp",
      name: "Surface is designed for remote work",
      description:
        "Find remote work solutions for your employees wherever they work. Stay secure and get it all done with Surface devices.",
      button: "LEARN ABOUT REMOTE WORK SOLUTIONS",
    },
    {
      image: "/deployment-management.webp",
      name: "Simple deployment and unified management",
      description:
        "Improve IT efficiency and reduce overhead and support costs with devices that optimize Microsoft software in the environments your apps are deployed.",
      button: "LEARN ABOUT SECURITY ON SURFACE",
    },
    {
      image: "/security.webp",
      name: "Microsoft security and Surface",
      description:
        "Stay secure and maintain control, from chip to cloud, with protection from Microsoft. Surface helps you mount proactive defenses with security built in.",
      button: "LEARN ABOUT DEVICE MANAGEMENT WITH SURFACE",
    },
  ];
  return (
    <Carousel autoPlay={false} IndicatorIcon="" navButtonsAlwaysVisible={true}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper elevation="0">
      <Image width={"375px"} height={"250px"} src={props.item.image} />
      <Typography variant="h6" gutterBottom>
        {props.item.name}
      </Typography>
      <Typography variant="body2">{props.item.description}</Typography>
      <Button>{props.item.button}</Button>
    </Paper>
  );
}
