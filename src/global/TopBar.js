import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../theme";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./Global.css";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { themeAction } from "../store/themeSlice";
import { useDispatch } from "react-redux/es/exports";
import SearchIcon from "@mui/icons-material/Search";
const TopBar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const colors = tokens(theme.palette.mode);
  // const colorMode = useSelector((state) => {
  //   return state.theme.mode;
  // });
  const handleColor = () => {
    dispatch(themeAction.toggleColorMode());
  };
  return (
    <div>
      <Box className="topBarBox">
        {/* search bar */}
        <Box className="searchBar" backgroundColor={colors.primary[400]}>
          <InputBase sx={{ marginLeft: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ padding: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
        {/* icons right side */}
        <Box>
          <IconButton>
            {" "}
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon onClick={handleColor} />
            ) : (
              <LightModeOutlinedIcon onClick={handleColor} />
            )}
          </IconButton>
          <IconButton>
            <NotificationsOutlinedIcon />
          </IconButton>{" "}
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>{" "}
          <IconButton>
            <PersonOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
};

export default TopBar;
