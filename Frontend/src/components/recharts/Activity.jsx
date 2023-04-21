// react
import React from "react";
// Style
import "./recharts.css";
// PropTypes
import PropTypes from "prop-types";

// mock
// import mockedData from "../mock/mockedData.js";
// console.log(mockedData);

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
  const color = {
    primary500: "#ff0101",
    neutral100: "#fbfbfb",
    neutral200: "#dedede",
    neutral400: "#9b9eac",
    neutral500: "#74798c",
    neutral800: "#2b2d30",
    neutral900: "#020203",
  };

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
    {
      day: "8",
      kilogram: 69,
      calories: 210,
    },
  ];

  return (
    <div className="containerCharts">
      {/* Text on the Top */}
      <div className="infoTextContainer">
        <div className="infoTextTitle">Activité quotidienne</div>
        <div className="infoTextLegend">
          <div className="infoTextLegendDetail">
            <div className="ColorCircle1"></div>
            Poids (kg)
          </div>
          <div className="infoTextLegendDetail">
            <div className="ColorCircle2"></div>
            Activité physique (Kcal)
          </div>
        </div>
      </div>
      {/* Activity of the week */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          barGap={8}
          barCategoryGap="35%"
          data={activity}
          margin={{ top: 85, right: 48, bottom: 30, left: 48 }}
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
          <Tooltip
            offset={47}
            content={<ActivityTooltip />}
            cursor={{
              fill: "rgba(0, 0, 0, 0.1)",
            }}
          />
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
  );
}
export default Recharts;

function ActivityTooltip({ active, payload }) {
  if (active && payload) {
    return (
      <div className="customTooltip">
        <div className="tooltipLine" background={"#2b2d30"}>
          {`${payload[0].value} kg`}
        </div>
        <div className="tooltipLine" background={"#ff0101"}>
          {`${payload[1].value} kCal`}
        </div>
      </div>
    );
  }

  return null;
}

ActivityTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};
