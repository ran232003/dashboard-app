import { Link } from "react-router-dom";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import { tokens } from "../theme";
const Item = (props) => {
  const { title, to, icon, selected, handleSelected } = props;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      // active =  if you are pushing the icon the color will change
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => handleSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

export default Item;
