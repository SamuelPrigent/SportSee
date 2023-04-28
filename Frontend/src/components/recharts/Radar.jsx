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
  const performanceArray = [];

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

  const performanceArrayReOrder = [];

  // 1 - Find Intensity
  for (let object of performanceArray) {
    if (object.kind === "intensity") {
      performanceArrayReOrder.push({
        kind: "Intensité",
        value: object.value,
      });
    }
  }
  // 2 - Find Speed
  for (let object of performanceArray) {
    if (object.kind === "speed") {
      performanceArrayReOrder.push({
        kind: "Vitesse",
        value: object.value,
      });
    }
  }
  // 3 - Find Strength
  for (let object of performanceArray) {
    if (object.kind === "strength") {
      performanceArrayReOrder.push({
        kind: "Force",
        value: object.value,
      });
    }
  }
  // 4 - Find Endurance
  for (let object of performanceArray) {
    if (object.kind === "endurance") {
      performanceArrayReOrder.push({
        kind: "Endurance",
        value: object.value,
      });
    }
  }
  // 5 - Find Energy
  for (let object of performanceArray) {
    if (object.kind === "energy") {
      performanceArrayReOrder.push({
        kind: "Energie",
        value: object.value,
      });
    }
  }
  // 6 - Find Cardio
  for (let object of performanceArray) {
    if (object.kind === "cardio") {
      performanceArrayReOrder.push({
        kind: "Cardio",
        value: object.value,
      });
    }
  }
  // console.log(performanceArrayReOrder);

  return (
    <div className="containerCharts">
      <AutoSizer>
        {({ width, height }) => (
          <RadarChart
            width={width}
            height={height}
            className="radarContainer"
            data={performanceArrayReOrder}
            // outerRadius={"65%"}
            outerRadius={window.innerWidth > 1300 ? "65%" : "60%"}
          >
            <PolarGrid radialLines={false} gridType="polygon" />
            <PolarAngleAxis
              dataKey="kind"
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
