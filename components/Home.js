import React from "react";
import { Box } from "@mui/system";
import {
  Typography,
  Button,
  Tabs,
  Tab,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import PropTypes from "prop-types";
import { HeroText } from "../src/theme";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box>
        <TabPanel value={value} index={0}>
          <Image
            src="/surfacebook-tab-1.webp"
            width={375}
            height={211}
            layout="responsive"
            position="relative"
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Image
            src="/surfacebook-tab-2.webp"
            width={375}
            height={211}
            layout="responsive"
            position="relative"
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Image
            src="/surfacebook-tab-3.webp"
            width={375}
            height={211}
            layout="responsive"
            position="relative"
          />
        </TabPanel>
      </Box>
      <HeroText>
        <Box textAlign="center">
          <Container maxWidth="xs">
            <Typography
              variant="h5"
              component="h1"
              fontWeight="bold"
              gutterBottom
            >
              Surface Book 3 for Business
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
              Performance meets versatility in our most powerful Surface laptop
              yet. Speed, graphics, and long battery life pair with the
              flexibility of a robust laptop, processor-powered tablet, and
              portable studio.
            </Typography>
            <Button
              href="https://www.youtube.com/watch?v=kYFnAnmwG5c"
              startIcon={<PlayArrowOutlinedIcon />}
              variant="text"
            >
              See it in action
            </Button>
            <Stack
              alignItems="center"
              sx={{
                my: 4,
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  icon={
                    <Avatar alt="test avatar" src="/jumbotron-tab-1.webp" />
                  }
                  {...a11yProps(0)}
                />
                <Tab
                  icon={
                    <Avatar alt="test avatar" src="/jumbotron-tab-2.webp" />
                  }
                  {...a11yProps(1)}
                />
                <Tab
                  icon={
                    <Avatar alt="test avatar" src="/jumbotron-tab-3.webp" />
                  }
                  {...a11yProps(2)}
                />
              </Tabs>
            </Stack>
          </Container>
        </Box>
      </HeroText>
    </>
  );
}
