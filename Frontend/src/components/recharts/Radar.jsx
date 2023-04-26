// react
import React from "react";
// PorpTypes
import PropTypes from "prop-types";
// Better for responsive than Responsive Container
import AutoSizer from "react-virtualized-auto-sizer";

// mock
// import mockedData from "../mock/mockedData.js";
// console.log(mockedData);

// performance radar
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

//
function Recharts() {
  // var
  const color = {
    primary500: "#ff0101",
  };

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

  // Performance Array for Radar
  let performanceArray = [];

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
  // console.log(performanceArray);

  return (
    <div className="containerCharts">
      <AutoSizer>
        {({ width, height }) => (
          <RadarChart
            width={width}
            height={height}
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
        )}
      </AutoSizer>
    </div>
  );
}

export default Recharts;

// Recharts.propTypes = {
//   userId: PropTypes.string.isRequired,
// };
