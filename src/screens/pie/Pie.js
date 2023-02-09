import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
import "../Screens.css";
const Pie = () => {
  return (
    <div className="dashboardMain">
      <Header title="DASHBOARD" subTitle="Welcome to your dashboard" />
      <Box sx={{ margin: "30px", height: "75vh" }}>
        <PieChart />
      </Box>
    </div>
  );
};

export default Pie;
