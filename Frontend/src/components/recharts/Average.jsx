// react
import React from "react";
// Style
import "./recharts.css";

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

// average sessions
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
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

  //   average sessions
  const sessions = [
    {
      day: "L",
      sessionLength: 30,
    },
    {
      day: "M",
      sessionLength: 23,
    },
    {
      day: "M",
      sessionLength: 45,
    },
    {
      day: "J",
      sessionLength: 50,
    },
    {
      day: "V",
      sessionLength: 0,
    },
    {
      day: "S",
      sessionLength: 0,
    },
    {
      day: "D",
      sessionLength: 60,
    },
  ];

  return (
    <div className="containerCharts">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          strokeLinecap="round"
          className="averageContainer"
          data={sessions}
          outerRadius="75%"
          margin={{ top: 0, right: 12, bottom: 24, left: 12 }}
        >
          <XAxis
            dataKey="day"
            stroke="rgba(255, 255, 255, 0.5)"
            axisLine={false}
            dy={10}
            tickLine={false}
            tick={{
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 60"]}
            hide={true}
          />
          <Line
            dataKey="sessionLength"
            type="monotone"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: "rgba(255,255,255, 0.5)",
              strokeWidth: 10,
              r: 5,
            }}
          />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Recharts;
