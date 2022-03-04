import * as React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  Divider,
  TableFooter,
  Stack,
} from "@mui/material";

function createData(name, description) {
  return { name, description };
}

const rows = [
  createData(
    "",
    `i5: 12.3” x 9.14” x 0.51”-0.90” (312 mm x 232 mm x 13 mm-23 mm)`
  ),
  createData(
    "",
    `i7: 12.3” x 9.14” x 0.59”-0.90” (312 mm x 232 mm x 15 mm-23 mm)`
  ),
];
const rows2 = [
  createData("", `13.5” x 9.87” x 0.568-0.90” (343 mm x 251 mm x 15 mm-23 mm)`),
];
const rows3 = [
  createData("", `Screen: 13.5” PixelSense™ Display`),
  createData("", `Resolution: 3000 x 2000 (267 PPI)`),
  createData("", `Aspect ratio: 3:2`),
  createData("", `Contrast ratio: 1600:1`),
  createData("", `10 point multi-touch G5 `),
];
const rows4 = [
  createData("", `Screen: 15” PixelSense™ Display`),
  createData("", `Resolution: 3240 x 2160 (260 PPI)`),
  createData("", `Aspect ratio: 3:2`),
  createData("", `Contrast ratio: 1600:1`),
  createData("", `10 point multi-touch G5`),
];
const rows5 = [
  createData("", `Quad-core 10th Gen Intel® Core™ i5-1035G7 Processor`),
  createData("", `Quad-core 10th Gen Intel® Core™ i7-1065G7 Processor`),
];
const rows6 = [createData("", `8GB, 16GB, or 32GB 3733Mhz LPDDR4x`)];

const rows7 = [createData("", `16GB or 32GB 3733Mhz LPDDR4x`)];

const rows8 = [
  createData("", `Quad-core 10th Gen Intel® Core™ i5-1035G7 Processor`),
  createData("", `Quad-core 10th Gen Intel® Core™ i7-1065G7 Processor`),
];

const rows9 = [
  createData("", `Quad-core 10th Gen Intel® Core™ i7-1065G7 Processor`),
];

const rows10 = [
  createData("Security", `TPM 2.0 chip for enterprise security`),
  createData("", `Enterprise-grade protection with Windows Hello face sign-in`),
  createData("", `Windows enhanced hardware security`),
];

const rows11 = [
  createData("Software", `Windows 10 Pro`),
  createData("", `Preloaded Microsoft 365 Apps5`),
  createData(
    "",
    `Microsoft 365 Business Standard, Microsoft 365 Business Premium, or Microsoft 365 Apps 30-day trial6`
  ),
];

const rows12 = [
  createData("Sensors", `Ambient light sensor`),
  createData("", `Proximity sensor`),
  createData("", `Accelerometer`),
  createData("", `Gyroscope`),
  createData("", `Magnetometer`),
];

const rows13 = [
  createData("", `i5: 65W Surface Power Supply w/USB-A (5W) charging port`),
  createData("", `i7: 102W Surface Power Supply w/USB-A (7W) charging port`),
  createData("", `Quick Start Guide`),
  createData("", `Safety and warranty documents`),
];

const rows14 = [
  createData("", `i7: 127W Surface Power Supply w/USB-A (7W) charging port`),
  createData("", `Quick Start Guide`),
  createData("", `Safety and warranty documents`),
];

const rows15 = [
  createData("", `i5: 3.38 lb (1,534 g) including keyboard`),
  createData("", `i7: 3.62 lb (1,642 g) including keyboard`),
];

const rows16 = [createData("", `i7: 4.20 lb (1,905 g) including keyboard`)];

const rows17 = [
  createData(
    "",
    `Solid-state drive (SSD) options: 256GB, 512GB, or 1TB PCIe SSD`
  ),
];

const rows18 = [
  createData(
    "",
    `Solid-state drive (SSD) options: 256GB, 512GB, 1TB, or 2TB PCIe SSD`
  ),
];

const rows19 = [
  createData(
    "",
    `Surface Book 3 13.5" connected to keyboard base: Up to 15.5 hours of typical device usage`
  ),
  createData(
    "",
    `Surface Book 3 15" connected to keyboard base: Up to 17.5 hours of typical device usage`
  ),
];

const rows20 = [
  createData("", `Intel® Iris™ Plus Graphics (on Intel® i5-1035G7 models)`),
  createData(
    "",
    `NVIDIA® GeForce® GTX 1650 with Max-Q Design w/4GB GDDR5 graphics memory (on Intel® i7-1065G7 models)`
  ),
];

const rows21 = [
  createData(
    "",
    `NVIDIA® GeForce® GTX 1660 Ti with Max-Q Design w/6GB GDDR6 graphics memory (on Intel® i7-1065G7 models)`
  ),
  createData(
    "",
    `NVIDIA® Quadro RTX™ 3000 with Max-Q Design w/6GB GDDR6 graphics memory (on Intel® i7-1065G7 models)`
  ),
];

const rows22 = [
  createData("Connections", `2 x USB-A (version 3.1 Gen 2)`),
  createData(
    "",
    `1 x USB-C® (version 3.1 Gen 2 with USB Power Delivery revision 3.0)`
  ),
  createData("", `3.5mm headphone jack`),
  createData(
    "",
    `2 x Surface Connect ports (one on keyboard base, one on tablet)`
  ),
  createData("", `Full-size SDXC card reader`),
  createData(
    "",
    `Compatible with Surface Dial7 on- and off-screen interaction`
  ),
];

const rows23 = [
  createData(
    "Cameras, video and audio",
    `Windows Hello face authentication camera (front-facing)`
  ),
  createData("", `5.0MP front-facing camera with 1080p HD video`),
  createData("", `8.0MP rear-facing auto-focus camera with 1080p HD video`),
  createData("", `Dual far-field Studio Mics`),
  createData("", `Front-facing stereo speakers with Dolby Atmos®`),
];

const rows24 = [
  createData("Wireless", `Wi-Fi 6: 802.11ax compatible`),
  createData("", `Bluetooth Wireless 5.0 technology`),
  createData("", `Xbox Wireless built in (15” only)3`),
];

const rows25 = [
  createData("Exterior", `Casing: Magnesium`),
  createData("", `Color: Platinum`),
  createData("", `Physical buttons: Volume, Power`),
];

const rows26 = [
  createData(
    "Warranty",
    `	
1-year limited hardware warranty`
  ),
];

export default function BasicTable() {
  return (
    <>
      <TableContainer>
        <Typography variant="h6" gutterBottom>
          Tech specs
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ sm: 4, md: 8 }}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dimensions</TableCell>
                <TableCell align="right">Surface Book 3 13.5"</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableHead>
              <TableRow>
                <TableCell> </TableCell>
                <TableCell align="right">Surface Book 3 15"</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows2.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableHead>
              <TableRow>
                <TableCell>Display</TableCell>
                <TableCell align="right">Surface Book 3 13.5"</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows3.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right">Surface Book 3 15"</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows4.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>

            <TableHead>
              <TableRow>
                <TableCell>Memory</TableCell>
                <TableCell align="right">Surface Book 3 13.5"</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows6.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right">Surface Book 3 15"</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows7.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableHead>
              <TableRow>
                <TableCell>Processor</TableCell>
                <TableCell align="right">Surface Book 3 13.5"</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows8.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right">Surface Book 3 15"</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows9.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableBody>
              {rows10.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableHead>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                  </TableHead>
                  <TableCell align="right">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableBody>
              {rows11.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableHead>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                  </TableHead>
                  <TableCell align="right">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableBody>
              {rows12.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableHead>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                  </TableHead>

                  <TableCell align="right">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableHead>
              <TableRow>
                <TableCell>What's in the box</TableCell>
                <TableCell align="right">Surface Book 3 13.5"</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows13.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right">Surface Book 3 13.5"</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows14.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableHead>
              <TableRow>
                <TableCell>Weight</TableCell>
                <TableCell align="right">Surface Book 3 13.5"</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows15.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right">Surface Book 3 13.5"</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows16.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Storage</TableCell>
                <TableCell align="right">Surface Book 3 13.5"</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows17.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right">Surface Book 3 15"</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows18.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableBody>
              {rows19.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableHead>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                  </TableHead>

                  <TableCell align="right">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableHead>
              <TableRow>
                <TableCell>Graphics</TableCell>
                <TableCell align="right">Surface Book 3 13.5"</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows20.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right">Surface Book 3 15"</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows21.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableBody>
              {rows22.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableHead>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                  </TableHead>
                  <TableCell align="right">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableBody>
              {rows23.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableHead>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                  </TableHead>
                  <TableCell align="right">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableBody>
              {rows24.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableHead>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                  </TableHead>

                  <TableCell align="right">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableBody>
              {rows25.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableHead>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                  </TableHead>

                  <TableCell align="right">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableBody>
              {rows26.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableHead>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                  </TableHead>

                  <TableCell align="right">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableCell></TableCell>
          </Table>
        </Stack>
      </TableContainer>
    </>
  );
}
