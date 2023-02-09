import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import ProgressCard from "../../components/ProgressCard";
import "../Screens.css";
import CenterSection from "./CenterSection";
import UpperSection from "./UpperSection";
const Dashboard = () => {
  return (
    <div className="dashboardMain">
      <Header title="DASHBOARD" subTitle="Welcome to your dashboard" />
      <Box sx={{ margin: "10px" }}>
        <UpperSection />
        <CenterSection />
      </Box>
    </div>
  );
};

export default Dashboard;
