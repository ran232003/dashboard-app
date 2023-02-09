import { Box } from "@mui/material";
import React from "react";
import BarChart from "../../components/BarChart";
import Header from "../../components/Header";
import "../Screens.css";
const Bar = () => {
  return (
    <div className="dashboardMain">
      <Header title="Bar Chart" subTitle="Bar chart data" />
      <Box sx={{ margin: "30px", height: "75vh" }}>
        <BarChart isDashboard={false} />
      </Box>
    </div>
  );
};

export default Bar;
