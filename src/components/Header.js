import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../theme";

const Header = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { title, subTitle } = props;
  return (
    <Box>
      <Typography
        variant="h1"
        sx={{ marginTop: "10px" }}
        color={colors.grey[100]}
      >
        {title}
      </Typography>
      <Typography
        variant="h4"
        sx={{ marginTop: "10px" }}
        color={colors.greenAccent[300]}
      >
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Header;
