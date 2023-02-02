import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../theme";
import { themeAction } from "../store/themeSlice";
import { useDispatch } from "react-redux/es/exports";
import Item from "./Item";
import { charts, data, pages } from "../data/sideBarItems";
import ProfileSideBar from "./ProfileSideBar";
const MySideBar = () => {
  const theme = useTheme();
  // to check where we are
  const [selected, setSelected] = useState("Dashboard");
  // to collepes the sideBar
  const [isCollapsed, setIsCollapsed] = useState(false);
  const dispatch = useDispatch();
  const colors = tokens(theme.palette.mode);

  const handleColor = () => {
    dispatch(themeAction.toggleColorMode());
  };
  const handleSelected = (title) => {
    setSelected(title);
  };
  return (
    <Box
      sx={{
        ".pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        ".pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        ".pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        ".pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        ".pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {/* if collapsed then: */}
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  {isCollapsed === true ? (
                    <MenuOutlinedIcon />
                  ) : (
                    <ArrowBackIcon />
                  )}
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* if collapsed: show sidebar with pic */}
          {!isCollapsed && <ProfileSideBar />}
          {/* if collapsed: show sidebar with pic */}
          {!isCollapsed && (
            <Box>
              <Item
                title="Dashboard"
                icon={<HomeOutlinedIcon />}
                handleSelected={handleSelected}
                selected={selected}
                to="/"
              ></Item>
              <h4 className="title">Data</h4>
              {data.map((item) => {
                return (
                  <Item
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                    handleSelected={handleSelected}
                    selected={selected}
                    to={item.path}
                  ></Item>
                );
              })}
              <h4 className="title">Charts</h4>
              {charts.map((item) => {
                return (
                  <Item
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                    handleSelected={handleSelected}
                    selected={selected}
                    to={item.path}
                  ></Item>
                );
              })}
              <h4 className="title">Pages</h4>
              {pages.map((item) => {
                return (
                  <Item
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                    handleSelected={handleSelected}
                    selected={selected}
                    to={item.path}
                  ></Item>
                );
              })}
            </Box>
          )}
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default MySideBar;
