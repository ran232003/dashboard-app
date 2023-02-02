import { Box, IconButton, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../theme";

const ProfileSideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box marginBottom="25px">
      <Box display="flex" justifyContent="center" alignItems="center">
        <img
          alt="profile-user"
          width="100px"
          height="100px"
          src={`../../assets/download.jpg`}
          style={{ cursor: "pointer", borderRadius: "50%" }}
        />
      </Box>
      <Box textAlign="center">
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ margin: "10px 0 0 0" }}
        >
          Ran Farjun
        </Typography>
        <Typography variant="h5" color={colors.greenAccent[500]}></Typography>
      </Box>
    </Box>
  );
};

export default ProfileSideBar;
