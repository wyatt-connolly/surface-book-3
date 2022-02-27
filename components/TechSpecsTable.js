import * as React from "react";
import {
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
const altrows = [
  createData("", `13.5” x 9.87” x 0.568-0.90” (343 mm x 251 mm x 15 mm-23 mm)`),
];

export default function BasicTable() {
  return (
    <TableContainer>
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
          {altrows.map((row) => (
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
    </TableContainer>
  );
}
