// react
import React from "react";
// PropTypes
import PropTypes from "prop-types";
// Better for responsive than Responsive Container
import AutoSizer from "react-virtualized-auto-sizer";

// mock
// import mockedData from "../mock/mockedData.js";
// console.log(mockedData);

import { Cell, Pie, PieChart } from "recharts";

//
function Score() {
  // color
  const color = {
    primary500: "#ff0101",
  };

  // Score
  const score = 0.3;

  //
  const pieData = [
    {
      name: "completed",
      value: score,
      fillColor: `${color.primary500}`,
    },
    // { name: "not-completed", value: 1 - score, fillColor: "transparent" },
  ];

  return (
    <div className="containerCharts">
      <div className="scoreTitle">Score</div>
      <AutoSizer>
        {({ width, height }) => (
          <PieChart className="scoreContainer" width={width} height={height}>
            <Pie
              data={pieData}
              dataKey="value"
              innerRadius={70}
              outerRadius={80}
              startAngle={90}
              endAngle={180}
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.fillColor}
                  cornerRadius="50%"
                />
              ))}
            </Pie>
            <Pie
              data={pieData}
              dataKey="value"
              innerRadius={0}
              outerRadius={70}
              startAngle={0}
              endAngle={360}
              fill="white"
            ></Pie>
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
