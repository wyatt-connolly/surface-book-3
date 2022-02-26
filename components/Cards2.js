import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import Image from "next/image";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import WarningIcon from "@mui/icons-material/Warning";
import ForumIcon from "@mui/icons-material/Forum";

export default function Cards2() {
  return (
    <Box>
      <Card>
        <CardContent>
          <Image src="/it-pro-resources.webp" width={375} height={200} />
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            IT Pro resources
          </Typography>
          <Typography variant="body1" gutterBottom>
            Learn how to plan, deploy, and manage Microsoft Surface and Surface
            Hub devices.
          </Typography>
          <Button>LEARN MORE</Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Image src="/protection-plans.webp" width={375} height={200} />
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Microsoft Protection Plans
          </Typography>
          <Typography variant="body1" gutterBottom>
            Maximize your investment in Surface with Microsoft Protection Plans.
            Explore Surface warranty details, extended coverage, and support
            options.
          </Typography>
          <Button>LEARN MORE</Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Image src="/sign-up.webp" width={375} height={200} />
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Sign up to keep pace with workplace innovation
          </Typography>
          <Typography variant="body1" gutterBottom>
            The workplace is changing fast. Surface is changing with it. Let us
            help you keep pace with the latest tech and research findings from
            leaders in the field.
          </Typography>
          <Button>SIGN UP</Button>
        </CardContent>
      </Card>
    </Box>
  );
}
