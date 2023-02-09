import { Box, useTheme } from "@mui/material";
import React from "react";
import GeoChart from "../../components/GeoChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import "../Screens.css";
const Gyography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div className="dashboardMain">
      <Header title="Gyography" subTitle="Welcome to your dashboard" />
      <Box
        sx={{
          margin: "20px",
          height: "75vh",
          border: `${colors.grey[400]} solid 3px`,
        }}
      >
        <GeoChart />
      </Box>
    </div>
  );
};

export default Gyography;
