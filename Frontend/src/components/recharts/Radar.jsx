// react
import React from "react";
// PropTypes ??
// import PropTypes from "prop-types";
// mock
// import mockedData from "../mock/mockedData.js";
// console.log(mockedData.USER_ACTIVITY[0]);

// custom tooltip activity session
// function CustomTooltip() {
//   return (
//     <TooltipContainer>
//       <TooltipLine background={`${color.neutral800}`}>
//         {`${payload[0].value} kg`}
//       </TooltipLine>
//       <TooltipLine background={`${color.primary500}`}>
//         {`${payload[1].value} kCal`}
//       </TooltipLine>
//     </TooltipContainer>
//   );
// }

// performance radar
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

//
function Recharts() {
  // var
  const color = {
    primary500: "#ff0101",
    neutral100: "#fbfbfb",
    neutral200: "#dedede",
    neutral400: "#9b9eac",
    neutral500: "#74798c",
    neutral800: "#2b2d30",
    neutral900: "#020203",
  };

  // Performance Radar
  let performanceArray = [];

  const kindArray = [
    "cardio",
    "energy",
    "endurance",
    "strength",
    "speed",
    "intensity",
  ];

  const performanceData = [
    {
      value: 200,
      kind: "cardio",
    },
    {
      value: 240,
      kind: "energy",
    },
    {
      value: 80,
      kind: "endurance",
    },
    {
      value: 80,
      kind: "strength",
    },
    {
      value: 220,
      kind: "speed",
    },
    {
      value: 110,
      kind: "intensity",
    },
  ];

  for (let kindName of kindArray) {
    for (let kindObject of performanceData) {
      if (kindObject.kind === kindName) {
        performanceArray.push({
          kind: kindObject.kind,
          value: kindObject.value,
        });
      }
    }
  }
  console.log(performanceArray);

  return (
    <div className="containerCharts">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          className="radarContainer"
          data={performanceArray}
          outerRadius={window.innerWidth > 1340 ? "70%" : "60%"}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="activity"
            stroke="white"
            dy={4}
            tickLine={false}
            tick={{
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <Radar
            dataKey="value"
            fill={`${color.primary500}`}
            fillOpacity={0.7}
            stroke="transparent"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Recharts;
