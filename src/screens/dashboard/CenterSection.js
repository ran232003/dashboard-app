import React, { useEffect, useRef, useState } from "react";
import LineChart from "../../components/LineChart";
import ProgressCard from "../../components/ProgressCard";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router-dom";
import { mockTransactions } from "../../data/mockData";
import Transaction from "./Transaction";

const CenterSection = () => {
  const [height, setHeight] = useState("40vh");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/line");
  };
  const ref = useRef(null);
  useEffect(() => {
    console.log(ref.current.clientHeight);
    let h = `${ref.current.clientHeight}px`;
    setHeight(h);
  });
  return (
    <div
      style={{
        display: "flex",
        marginTop: "30px",
        justifyContent: "space-around",
      }}
    >
      <Box
        ref={ref}
        onClick={handleNav}
        sx={{
          height: "fit-content",
          cursor: "pointer",
          width: "110vh",
          backgroundColor: colors.primary[400],
          marginBottom: "20px",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{ marginTop: "10px", marginLeft: "10px" }}
            color={colors.grey[100]}
          >
            Revenue Garanted
          </Typography>
          <Typography
            variant="h2"
            sx={{ marginTop: "10px", marginLeft: "10px" }}
            color={colors.greenAccent[300]}
          >
            57,020
          </Typography>
        </Box>
        <Box
          sx={{
            height: "35vh",
            width: "100vh",
            maxHeight: "fit-content",
          }}
        >
          <LineChart />
        </Box>
      </Box>
      <Box
        sx={{
          height: height,
          backgroundColor: colors.primary[400],
          overflow: "auto",
          width: "35vh",
        }}
      >
        <Typography
          variant="h4"
          sx={{ marginBottom: "10px", margin: "10px" }}
          color={colors.grey[100]}
          fontWeight="bold"
        >
          Recent Transactions
        </Typography>
        {mockTransactions.map((trans, index) => {
          return (
            <Transaction
              key={trans.txId}
              index={index}
              id={trans.txId}
              cost={trans.cost}
              date={trans.date}
              user={trans.user}
            />
          );
        })}
        {/* <ProgressCard
          icon={<EmailIcon style={{ color: colors.greenAccent[500] }} />}
          title="email sent"
          data={378}
        /> */}
      </Box>
    </div>
  );
};

export default CenterSection;
