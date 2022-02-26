import React from "react";
import { Box, Button } from "@mui/system";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import WarningIcon from "@mui/icons-material/Warning";
import ForumIcon from "@mui/icons-material/Forum";
import { Note } from "@mui/icons-material";

export default function Insights() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <PersonSearchIcon />
      <NoteAltIcon />

      <WarningIcon />

      <ForumIcon />
    </Box>
  );
}
