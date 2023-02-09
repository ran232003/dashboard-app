import { useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../theme";
import CircleProgressBar from "./CircleProgressBar";
import "./Components.css";
const ProgressCard = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { icon, data, title, percentage } = props;
  return (
    <div
      className="mainProgress"
      style={{ backgroundColor: colors.primary[400] }}
    >
      <div className="leftSide">
        {/* "icon,data,title" */}
        {icon}
        <p>{data}</p>
        <h4 style={{ color: colors.greenAccent[500] }}>{title}</h4>
      </div>
      <div className="rightSide">
        {" "}
        <div className="bar">
          {" "}
          <CircleProgressBar percentage={percentage} />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProgressCard;
