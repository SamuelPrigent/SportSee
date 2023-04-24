// react
import React from "react";
// PropTypes
import PropTypes from "prop-types";
// Better for responsive than Responsive Container
import AutoSizer from "react-virtualized-auto-sizer";

// mock
// import mockedData from "../mock/mockedData.js";
// console.log(mockedData);

// style
// import "../style/test.css";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

//
function Score() {
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

  //   Score
  const score = 0.3;

  const pieData = [
    { name: "completed", value: score, fillColor: `${color.primary500}` },
    { name: "not-completed", value: 1 - score, fillColor: "transparent" },
  ];

  return (
    <div className="containerCharts">
      <AutoSizer>
        {({ width, height }) => (
          <PieChart className="scoreContainer" width={width} height={height}>
            <Pie
              data={pieData}
              dataKey="value"
              innerRadius={70}
              outerRadius={80}
              startAngle={90}
              endAngle={450}
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.fillColor}
                  cornerRadius="50%"
                />
              ))}
            </Pie>
          </PieChart>
        )}
      </AutoSizer>
      <div className="scoreText">
        <div className="scoreValue">{`${100 * score}%`}</div>
        de votre
        <br />
        objectif
      </div>
    </div>
  );
}

export default Score;
