// react
import React from "react";
// style
// import "../style/test.css";
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
      <ResponsiveContainer width="100%" height="100%">
        <PieChart className="scoreContainer" width={160} height={160}>
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
      </ResponsiveContainer>
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
