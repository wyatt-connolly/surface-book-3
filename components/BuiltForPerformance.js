import * as React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box } from "@mui/material/";
import { HideDesktop, HideMobile } from "../src/theme";
import Image from "next/dist/client/image";

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

export default function BuiltForPerformance() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", my: 3 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabPanel value={value} index={0}>
          <Image
            src="/creative-pros.webp"
            width={375}
            height={211}
            layout="responsive"
            quality="100"
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Image
            src="/architects-and-engineers.webp"
            width={375}
            height={211}
            layout="responsive"
            quality="100"
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Image
            src="/developers.webp"
            width={375}
            height={211}
            layout="responsive"
            quality="100"
          />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Image
            src="/data-scientists.webp"
            width={375}
            height={211}
            layout="responsive"
            quality="100"
          />
        </TabPanel>
        <HideMobile>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
          >
            <Tab label="Creative pros" {...a11yProps(0)} />
            <Tab label="Architects and engineers" {...a11yProps(1)} />
            <Tab label="Developers" {...a11yProps(2)} />
            <Tab label="Data scientists" {...a11yProps(2)} />
          </Tabs>
        </HideMobile>

        <HideDesktop>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            <Tab label="Creative pros" {...a11yProps(0)} />
            <Tab label="Architects and engineers" {...a11yProps(1)} />
            <Tab label="Developers" {...a11yProps(2)} />
            <Tab label="Data scientists" {...a11yProps(2)} />
          </Tabs>
        </HideDesktop>
      </Box>

      <TabPanel value={value} index={0}>
        <Typography variant="body2" textAlign="center">
          Find inspiration anywhere, capturing content and editing wherever you
          work. Come back to your desk to continue your flow on your Surface
          Book 3 digital canvas, creating in apps like Adobe® Creative Cloud®.
          Power your creative momentum with NVIDIA® GeForce® GTX 1660 Ti
          graphics. Watch your designs come to life on dual 4K monitors at 60Hz
          when you connect with Surface Dock 2.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="body2" textAlign="center">
          Bring your vision to life with Surface Book 3, certified for software
          like Autodesk® Revit® and Dassault SOLIDWORKS™. With NVIDIA® Quadro
          RTX™ 3000 graphics, visualize and showcase 3D models on a 15” tablet
          your clients can explore and pinch to zoom. See it from every
          perspective on dual 4K monitors at 60Hz when you connect with Surface
          Dock 2.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="body2" textAlign="center">
          Free yourself from your desk and compile, run, and debug cycles
          anywhere in software like Microsoft Visual Studio. Performance stays
          with you, powered by your choice of discrete graphics and the latest
          processors. Type with precision on the full-size keyboard, see it all
          with a 15” display, and work until lights out with up to 17.5 hours
          battery life.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography variant="body2" textAlign="center">
          Harness your data with a powerful, portable 15” device. Analyze data
          faster and develop machine learning-powered models on-device with the
          latest quad-core 10th Gen Intel® processors and up to NVIDIA® Quadro
          RTX™ 3000 graphics. Set up your analysis wherever you want to work
          with up to 17.5 hours battery life2 and Bluetooth 5.0 to pair your
          favorite accessories.
        </Typography>
      </TabPanel>
    </Box>
  );
}
