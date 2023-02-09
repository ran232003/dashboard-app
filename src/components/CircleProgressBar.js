import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircleProgressBar = (props) => {
  const { percentage } = props;
  return <CircularProgressbar value={percentage} text={`${percentage}%`} />;
};

export default CircleProgressBar;
