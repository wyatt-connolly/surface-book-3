import React from "react";
import { Box } from "@mui/system";
import {
  Typography,
  Button,
  Tabs,
  Tab,
  Avatar,
  Accordion,
} from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";

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
        <Box sx={{ p: 3 }}>
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
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <Box>
        <TabPanel value={value} index={0}>
          <Image src="/surfacebook-tab-1.webp" width={375} height={200} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Image src="/surfacebook-tab-2.webp" width={375} height={200} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Image src="/surfacebook-tab-3.webp" width={375} height={200} />
        </TabPanel>
        <Typography
          variant="display"
          component="h1"
          fontWeight="bold"
          gutterBottom
        >
          Surface Book 3 for Business
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Performance meets versatility in our most powerful Surface laptop yet.
          Speed, graphics, and long battery life pair with the flexibility of a
          robust laptop, processor-powered tablet, and portable studio.
        </Typography>
        <Button variant="text">See it in action</Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            icon={<Avatar alt="test avatar" src="/jumbotron-tab-1.webp" />}
            {...a11yProps(0)}
          />
          <Tab
            icon={<Avatar alt="test avatar" src="/jumbotron-tab-2.webp" />}
            {...a11yProps(1)}
          />
          <Tab
            icon={<Avatar alt="test avatar" src="/jumbotron-tab-3.webp" />}
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
    </Box>
  );
}
