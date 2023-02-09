import { useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import React from "react";
import { mockPieData as data } from "../data/mockData";
import { tokens } from "../theme";
const PieChart = (props) => {
  const { isDashboard } = props;
  const format = (v) => `${v}%`;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const makePercent = () => {
    let sum = data.reduce(function (previousValue, currentValue) {
      if (previousValue.value) {
        return previousValue.value + parseInt(currentValue.value);
      }
      return previousValue + parseInt(currentValue.value);
    });
    data.map((item, index) => {
      data[index].value = Math.floor((data[index].value / sum) * 100);
    });
  };
  makePercent();
  return (
    <ResponsivePie
      data={data}
      theme={{
        textColor: colors.greenAccent[300],
        tooltip: {
          container: {
            background: "#ffffff",
            color: "#333333",
            fontSize: 12,
          },
          basic: {},
          chip: {},
          table: {},
          tableCell: {},
          tableCellValue: {},
        },
      }}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      sliceLabel={(item) => `${item.value}%`}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.greenAccent[300]}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabel={function (e) {
        return e.value + "%";
      }}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "ruby",
          },
          id: "dots",
        },
        {
          match: {
            id: "c",
          },
          id: "dots",
        },
        {
          match: {
            id: "go",
          },
          id: "dots",
        },
        {
          match: {
            id: "python",
          },
          id: "dots",
        },
        {
          match: {
            id: "scala",
          },
          id: "lines",
        },
        {
          match: {
            id: "lisp",
          },
          id: "lines",
        },
        {
          match: {
            id: "elixir",
          },
          id: "lines",
        },
        {
          match: {
            id: "javascript",
          },
          id: "lines",
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: colors.greenAccent[300],
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart;
