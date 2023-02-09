import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
const Transaction = (props) => {
  const { cost, date, user, id, index } = props;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  console.log(index);
  const borderTop = index === 0 ? "black solid 5px" : "none";
  return (
    <Box
      sx={{
        display: "flex",
        borderBottom: "black solid 5px",
        borderTop: borderTop,
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ margin: "10px" }}>
        <Typography
          variant="h5"
          color={colors.greenAccent[400]}
          fontWeight="bold"
        >
          {id}
        </Typography>
        <Typography variant="h5" color={colors.grey[100]} fontWeight="bold">
          {user}
        </Typography>
      </Box>
      <Box sx={{ margin: "10px" }}>
        {" "}
        <Typography variant="h5" color={colors.grey[100]} fontWeight="bold">
          {date}
        </Typography>
      </Box>
      <Box
        sx={{
          margin: "10px",
          backgroundColor: colors.greenAccent[500],
          p: "5px 10px",
          borderRadius: "4px",
          maxWidth: "70px",
        }}
      >
        <Typography variant="h5" color={colors.grey[100]} fontWeight="bold">
          ${cost}
        </Typography>
      </Box>
    </Box>
  );
};

export default Transaction;
