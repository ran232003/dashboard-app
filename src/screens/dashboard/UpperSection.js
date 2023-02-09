import { Box, useTheme } from "@mui/material";
import React from "react";
import ProgressCard from "../../components/ProgressCard";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

import { tokens } from "../../theme";
const UpperSection = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        display: "flex",
        flex: "0 0 33.333333%",
        justifyContent: "space-between",
      }}
    >
      <ProgressCard
        percentage={75}
        icon={<EmailIcon style={{ color: colors.greenAccent[500] }} />}
        title="Email Sent"
        data={378}
      />
      <ProgressCard
        percentage={45}
        icon={<PointOfSaleIcon style={{ color: colors.greenAccent[500] }} />}
        title="Sales Obtained"
        data={981}
      />
      <ProgressCard
        percentage={80}
        icon={<PersonAddIcon style={{ color: colors.greenAccent[500] }} />}
        title="New Clients"
        data={7643}
      />
      <ProgressCard
        percentage={62}
        icon={<TrafficIcon style={{ color: colors.greenAccent[500] }} />}
        title="Traffic Received"
        data={1234}
      />
    </Box>
  );
};

export default UpperSection;
