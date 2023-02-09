import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import PieChart from "../../components/PieChart";
const BottomSection = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box display="flex">
      <Box>
        <Box>
          <Typography variant="h3" color={colors.grey[100]} fontWeight="bold">
            Campgain
          </Typography>
        </Box>
        <Box sx={{ backgroundColor: colors.primary[400] }}>
          <PieChart />
        </Box>
      </Box>
    </Box>
  );
};

export default BottomSection;
