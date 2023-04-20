// react
import React from "react";
// Style
import "../components/recharts/recharts.css";

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

// activity
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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

  // activity;
  const activity = [
    {
      day: "1",
      kilogram: 71,
      calories: 240,
    },
    {
      day: "2",
      kilogram: 72,
      calories: 270,
    },
    {
      day: "3",
      kilogram: 71,
      calories: 260,
    },
    {
      day: "4",
      kilogram: 72,
      calories: 390,
    },
    {
      day: "5",
      kilogram: 71,
      calories: 160,
    },
    {
      day: "6",
      kilogram: 70,
      calories: 162,
    },
    {
      day: "7",
      kilogram: 69,
      calories: 160,
    },
  ];

  return (
    <div className="mainContainer">
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="rightContainer"
      >
        {/* Activity of the week */}
        <ResponsiveContainer width="80%" height="80%">
          <BarChart
            width={500}
            height={300}
            barGap={8}
            barCategoryGap="35%"
            data={activity}
            margin={{ top: 50, right: 48, bottom: 30, left: 48 }}
          >
            <CartesianGrid
              strokeDasharray="2 2"
              vertical={false}
              stroke={`${color.neutral200}`}
            />
            <XAxis
              dataKey="day"
              dy={16}
              tick={{ fontSize: 14, fontWeight: 500 }}
              padding={{ left: -36, right: -36 }}
              tickLine={false}
              stroke={`${color.neutral400}`}
            />
            <YAxis
              orientation="right"
              dx={48}
              yAxisId="kg"
              dataKey="kilogram"
              axisLine={false}
              tickLine={false}
              domain={["dataMin - 1", "dataMax + 2"]}
            />
            <YAxis
              yAxisId="cal"
              dataKey="calories"
              domain={[0, "dataMax + 50"]}
              hide={true}
            />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Bar
              yAxisId="kg"
              dataKey="kilogram"
              radius={[50, 50, 0, 0]}
              fill="#282D30"
            />
            <Bar
              yAxisId="cal"
              dataKey="calories"
              radius={[50, 50, 0, 0]}
              fill="#E60000"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Recharts;
