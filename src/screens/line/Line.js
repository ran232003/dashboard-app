import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import "../Screens.css";
const Line = () => {
  return (
    <div className="dashboardMain">
      <Header title="Line" subTitle="Welcome to your dashboard" />
      <Box sx={{ margin: "20px", height: "75vh" }}>
        <LineChart />
      </Box>
    </div>
  );
};

export default Line;
